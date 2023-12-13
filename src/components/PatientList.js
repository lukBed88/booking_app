import React from "react";
import patientList from "../helpers/patientList";
import PatientCardData from "./PatientCardData";
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {ContainerPatientList,ContainerPatients,InputSearchPatient,PatientsListUl,PatientsListLi,IconCloseUl,TitleHeader,ContainerList} from '../styled/StyledPatientList'

const PatientList = (props) => {

    const {patientsName,doctorsName,refreshApp,toggle,isActive} = props

    const [isInputFocused, setInputFocused] = React.useState(false);
    const [inputValue, setIsInputValue] = React.useState('');
    const [visible,setIsVisible] = React.useState(false);
    const [identityPatient,setIsIdentityPatient] = React.useState();

    const patientsFullList = () => {
        const listOfPatientsArray = patientList(patientsName)
        const listOfPatientsData = Object.values(listOfPatientsArray).map((patient) => {
            return {
                id:patient[0].id,
                name:`${patient[0].name} ${patient[0].surname}`
            }
        })
        
        const filteredSuggestions = listOfPatientsData.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(inputValue.toLowerCase()));

        const filterResult = inputValue.length > 2 ? filteredSuggestions : listOfPatientsData
            return filterResult.map((patient,index) => {
                return (
                    <PatientsListLi
                        pattern = {toggle} 
                        data-id={patient.id}
                        onClick={(e) => choicePatient(e)} 
                        key={index}
                        >{toggle ? `${index+1}.${patient.name}` : `${patient.name}`}</PatientsListLi>
                )
            })
    }

    const choicePatient = (e) => {
        e.preventDefault()
        const idPatient = e.target.getAttribute("data-id");
        setIsVisible(true)
        setIsIdentityPatient(idPatient)
        isActive(true)
        
    }

    const inputText = (e) => {
    const {name, value} = e.target
    setIsInputValue(value)
    }

    const refreshCalendar = () => {
        setIsVisible(false)
        isActive(false)
    }
    
    return (
        <ContainerPatientList pattern={toggle}>
        {toggle && (
          <div>
            <TitleHeader>Pacjenci</TitleHeader>
            <ContainerList>{patientsFullList()}</ContainerList>
          </div>
        )}
        <ContainerPatients>
          <InputSearchPatient
            placeholder="Wyszukaj pacjenta"
            onChange={(e) => inputText(e)}
            onClick={() => setInputFocused(true)}
          />
          {isInputFocused && (
            <PatientsListUl
              pattern={toggle}
              onClick={() => setInputFocused(false)}
            >
              <IconCloseUl
                icon={faXmark}
                onClick={(e) => setInputFocused(false)}
              />
              {patientsFullList()}
            </PatientsListUl>
          )}
          {visible && (
            <PatientCardData
              bcg={visible}
              patientId={identityPatient}
              listOfPatient={patientsName}
              listOfDoctors={doctorsName}
              deleteVisit={refreshApp}
              hidePatientCard={() => refreshCalendar()}
            />
          )}
        </ContainerPatients>
      </ContainerPatientList>
        )
}

export default PatientList

