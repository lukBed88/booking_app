import React from "react";
import { ContainerCalendar } from "./DaySlots";
import getDoctorsData from "../apiEndpoints/getDoctorsData";
import {Container,OverlayContainer } from "./ContainerApp";
import SelectDoctors from "./SelectDoctors";
import { dateVisits } from "../helpers";
import { DoctorCalendar,CustomTile } from "./DoctorCalendar";
import idSlotDay from "../helpers/idSlotDay";
import slotsVisit from "../helpers/slotsVisit";
import { AddButton,ContainerForm,PatientForm } from "./PatientForm";
import postPatientData from "../apiEndpoints/postPatientData";
import getPatientsData from "../apiEndpoints/getPatientsData";
import PatientList from "./PatientList";
import officeHoursDoctor from "../helpers/officeHoursDoctor";
import { DoctorForm,AddDoctorButton, DoctorContainer } from "./DoctorForm";
import doctorList from "../helpers/doctorList";
import { DoctorsList } from "./DoctorsList";
import Welcome from "./Welcome";
import allVisits from "../helpers/allVisitsOnThePatientSide";
import parseDate from "../helpers/parseDate";
import sendDoctorData from "../helpers/sendDoctorData";
import RenderSlots from "./RenderSlots";
import Loader from "./Loader";
import { ThemeProvider } from "styled-components";
import media from '../styled/ResponseStyled'

export const Calendar = () => {

    const [dateTime,setDate] = React.useState(new Date());
    const [slots,setSlots] = React.useState([]);
    const [isSlotsVisible, setIsSlotsVisible] = React.useState(false);
    const [valueSlot,setIsValueSlot] = React.useState({});
    const [tab, setTab] = React.useState([]);
    const [patientTab, setIsPatientTab] = React.useState([])
    const [patientsData, setIsPatientsData] = React.useState([])
    const [inputValues, setInputValues] = React.useState(false)
    const [selectOption,setIsSelectOption] = React.useState('')
    const [terms,setIsTerms] = React.useState()
    const [formPatient,setIsFormPatient] = React.useState(false)
    const [doctorForm,setIsDoctorForm] = React.useState(false)
    const [calendarActive,setCalendarActive] = React.useState(false)
    const [patientFormValue, setIsPatientFormValue] = React.useState({})
    const [doctorFormValue, setIsDoctorFormValue] = React.useState({})
    const [selectedPatients, setSelectedPatients] = React.useState([]);
    const [savePatient,setIsSavePatient] = React.useState(false)
    const [toggleDoctor,setIsToggleDoctor] = React.useState(false)
    const [togglePatient,setIsTogglePatient] = React.useState(false)
    const [patientCardActive,setPatientCardActive] = React.useState(false)

    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const doctorData = await getDoctorsData();
                const doctorArr = Object.entries(doctorData);
                const newDoctorTab = doctorArr
                    .map((data) => data)
                    .filter((item) => item);
                setTab(newDoctorTab);

                const patientData = await getPatientsData();
                setIsPatientsData(patientData)
                const patientArr = Object.entries(patientData);
                const newPatientTab = patientArr
                    .map((data) => data)
                    .filter((item) => item);
                setIsPatientTab(newPatientTab)
            } catch (error) {
                console.error('Błąd podczas pobierania danych:', error);
            } finally {
                setIsLoading(false)
            }
        };

        fetchData();
    }, [inputValues,isSlotsVisible, selectOption,savePatient]);

    const generateSlots = (selectDate) => {
        const newSlots = []
        const hoursOfficeArray = officeHoursDoctor(tab,selectOption)
        const fullDate = parseDate(selectDate)
            hoursOfficeArray.map((data) => {
            for(const key in data) {
                newSlots.push({time:data[key],date:fullDate})
            }
        })
        setSlots(newSlots)
    }
    const onChangeDate = (selectedDate) => {
        setDate(selectedDate)
        setIsSlotsVisible(true);
        generateSlots(selectedDate)
    }
    const updateSlotValue = () => {
        setInputValues(!inputValues)
        setSelectedPatients([])
    } 
    const sendSlotValue = () => {
        const date = parseDate(dateTime)
        setInputValues(!inputValues)
        setSelectedPatients([])
        if(!Array.isArray(selectedPatients)){
            setIsTerms(prevState => [...prevState, date]);
            }
    }
    const choicePatient = (e) => {
        const {name,value} = e.target
        setIsValueSlot({
            ...valueSlot,
            [name]:value
        })
    }
    const addChoicePatientToState = (selectedValue) => {
        setSelectedPatients((prevState) => {
            const keyEntry = Object.values(selectedValue)
            const patientNumber = keyEntry[0]
            return {
                ...prevState,
                [patientNumber] : selectedValue
            }
        })
    };
    const renderDoctors = () => {
        const doctorsList = tab.map((item) => {
            const idDoctor = item[0] 
            const doctor = item[1].name + " " + item[1].surname
            return {
                idDoctor : idDoctor,
                doctor: doctor
            }
        })
        return doctorsList
    }
    const choiceDoctor = (e) => {
        setIsSelectOption(e.value)
        const days = dateVisits(e.value,tab)
        setIsTerms(days)
        console.log('selectOptionChoiceDoctorPO',selectOption)
    }
    const occupiedDays = ({ date }) => {
        const day = date.getDate()
        const parseChoiceDate = parseDate(date)
        const color = terms.includes(parseChoiceDate) ? "#50b8e7" : "white"
        const colorFont = terms.includes(parseChoiceDate) ? "white" : "black"
        return (
          <CustomTile color={color} colorFont={colorFont}>
            {day}
          </CustomTile>
        );
    };
    const closeCalendarDay = (e) => {
        const fullDate = parseDate(dateTime)
        const slotValue = slotsVisit(tab,selectOption,dateTime)
        const slotID = idSlotDay(tab,selectOption,dateTime)
        if(slotValue.length === 0 && slotID !== undefined){
            const newTerms = terms.filter((term) => term !== fullDate)
            setIsTerms(newTerms)
        }
        e.preventDefault()
        setIsSlotsVisible(!isSlotsVisible)
        setSelectedPatients([])
        setCalendarActive(false)
    }
    const addNewPatient = (e) => {
        e.preventDefault()
        setIsFormPatient(!formPatient)
    }
    const addNewDoctor = (e) => {
        e.preventDefault()
        setIsDoctorForm(!doctorForm)
    }
    const patientForm = () => {
            return (
                <PatientForm
                    title = {'Dane pacjenta'}
                    onChange = {patientData}
                    closeForm = {() => setIsFormPatient(false)}
                    data = {patientFormValue}
                    changeState = {sendPatientData}
                />
            )
    }
    const doctorForms = () => {
            return (
                <DoctorForm
                    title = {'Dane lekarza'}
                    onChange = {doctorData}
                    closeForm = {() => setIsDoctorForm(false)}
                    doctorFormValue = {doctorFormValue}
                    data = {doctorFormValue}
                    sendData = {sendDoctorData}
                    changeState = {addDoctorData}
                    />          
            )
    }
    const patientData = (e) => {
        const {name,value} = e.target
        setIsPatientFormValue({
            ...patientFormValue,
            [name]:value,
            visits:''
        })
    }
    const doctorData = (e) => {
        console.log('e?',e)
        const {name,value} = e.target
        setIsDoctorFormValue({
            ...doctorFormValue,
            [name || 'specialization']:value,
            visits:''
        })
    }
    const sendPatientData = () => {
        postPatientData(patientFormValue)
        setIsPatientFormValue({})
        setIsSavePatient(!savePatient)
    }
    const addDoctorData = () => {
    setIsSavePatient(!savePatient)
    setIsDoctorFormValue({})
    }
    const calendarRefresh = () => {
    setInputValues(!inputValues)
    }
    const refresh = () => {
    setIsSavePatient(!savePatient)
    }
    const renderList = (e) => {
    e.preventDefault()
    console.log(e.target)
    const {name} = e.target
    if(name === 'doctor'){
        setIsToggleDoctor(true)
        setIsTogglePatient(false)
    }
    else if(name === 'patient'){
        setIsToggleDoctor(false)
        setIsTogglePatient(true)
    }
    }
    const isPatientCardActive = (childState) => {
      setPatientCardActive(childState)
    }

return (
    <>
    <ThemeProvider theme={media}>
      {isLoading && <Loader />}
      {!isLoading && (<></>)} 
        <>
          {allVisits(patientTab)}
          <Welcome
            onClick={(e) => renderList(e)}
            clearFlags={() => {
              setIsToggleDoctor(false);
              setIsTogglePatient(false);
              setPatientCardActive(false)
            }}
          />
          {toggleDoctor === false && togglePatient === false ? (
            <Container>
              {[formPatient, doctorForm, selectOption, patientCardActive].some(Boolean) ? <OverlayContainer search={patientCardActive}/> : null}
              <SelectDoctors
                doctorArray={renderDoctors()}
                onChange={(e) => choiceDoctor(e)}
                doctorId={selectOption}
              />
              <AddButton onClick={(e) => addNewPatient(e)}>Dodaj pacjenta</AddButton>
              <AddDoctorButton onClick={(e) => addNewDoctor(e)}>Dodaj lekarza</AddDoctorButton>
              <PatientList
                doctorsName={tab}
                patientsName={patientTab}
                refreshApp={() => calendarRefresh()}
                isActive = {isPatientCardActive}
              />
              {formPatient === true ? (
                <ContainerForm>{patientForm()}</ContainerForm>
              ) : null}
              {doctorForm === true ? (
                <DoctorContainer>
                  <form>{doctorForms()}</form>
                </DoctorContainer>
              ) : null}
              {selectOption !== '' ? (
                <ContainerCalendar>
                  <DoctorCalendar
                    close={() => setIsSelectOption('')}
                    onChange={onChangeDate}
                    value={dateTime}
                    tileContent={occupiedDays}
                    onClickDayCalendar={() => setCalendarActive(true)}
                    activeDay={calendarActive}
                  />
                  <RenderSlots
                    isSlotsVisible={isSlotsVisible}
                    tab={tab}
                    selectOption={selectOption}
                    dateTime={dateTime}
                    slots={slots}
                    valueSlot={valueSlot}
                    patientTab={patientTab}
                    patientsData={patientsData}
                    selectedPatients={selectedPatients}
                    closeCalendarDay={(e) => closeCalendarDay(e)}
                    choicePatient={(e) => choicePatient(e)}
                    addChoicePatientToState={addChoicePatientToState}
                    onUpdateSlotValue={updateSlotValue}
                    onSendSlotValue={sendSlotValue}
                  />
                </ContainerCalendar>
              ) : null}
              
            </Container>
          ) : (
            <>
              {toggleDoctor === true && togglePatient === false ? (
                <DoctorsList
                  doctorTab={doctorList(tab)}
                  patientTab={patientTab}
                  remove={refresh}
                />
              ) : (
                <PatientList
                  doctorsName={tab}
                  patientsName={patientTab}
                  refreshApp={() => calendarRefresh()}
                  toggle={togglePatient}
                  isActive={isPatientCardActive}
                />
              )}
            </>
          )}
        </>
        </ThemeProvider>
    </>
  );
}

export default Calendar




        







 