import React from "react"
import {faXmark,faUserDoctor,faUser,faSignature,faPhone,faHourglassStart,faStethoscope} from '@fortawesome/free-solid-svg-icons'
import {validationDoctorForm,validationSpecializationDoctorForm,validationOfficeHoursDoctorForm} from '../helpers/validationDoctorForm'
import {
    DoctorContainer,
    FormTitle,
    HeaderTitle,
    InputContainer,
    InputForm,
    ContainerSendButton,
    SendDoctorButton,
    ContainerSpecialization,
    ParagraphSpecialization,
    SelectSpecialization,
    Option,
    ContainerSlots,
    CheckboxesContainer,
    SingleCheckbox,
    HourParagraph,
    HiddenCheckbox,
    CloseButton,
    IconTitle,
    IconDoctorForm,
    IconDoctorSpecialization,
    AddDoctorButton,
    ParagraphOfficeHoursContainer,
    IconOfficeHours,
    ContainerErrorMessage,
    ErrorMessage} from '../styled/StyledDoctorForm'

const DoctorForm = (props) => {

    const {title,onChange,closeForm,data,sendData,doctorFormValue,changeState} = props
    const hours = [];

    const [hoursArray,setIsHoursArray] = React.useState(hours)
    const [mistakesForm,setIsMistakesForm] = React.useState([])
    const [profession,setIsProfession] = React.useState([])
    const [slotsOffice,setIsSlotsOffice] = React.useState([])


    const [selectedSpecialization, setSelectedSpecialization] = React.useState('')

    const dataArray = [
        {name: 'name', icon:faUser,correct:true,value:data['name'] || ""},
        {surname: 'surname', icon:faSignature,correct:true,value:data['surname'] || ""},
        {phoneNumber: 'phoneNumber', icon:faPhone,correct:true,value:data['phoneNumber'] || ""},
        ]

    const specializationArray = ['lekarz ogólny','pediatra','ortopeda','chirurg','kardiolog','pulmonolog','okulista','laryngolog']

    const dataForm = () => {
        return dataArray.map((doctor,index) => {
            const key = Object.keys(doctor)[0];
            const DoctorValue = Object.values(doctor)[0];
                return (
                    <InputContainer key={index}>
                    <IconDoctorForm icon={doctor.icon}/>
                    <InputForm
                    border = {doctor.correct}
                    onChange={onChange}
                    value={doctor.value}
                    name={key}
                    placeholder={DoctorValue}
                    />
                    </InputContainer>
                )
        })
    }

    const specializationOptions = () => {

        return (
            <ContainerSpecialization>
                <ParagraphSpecialization>
                    <IconDoctorSpecialization icon={faStethoscope}/>
                    Specjalizacja
                    </ParagraphSpecialization>
            <SelectSpecialization
                onChange={(e) => {
                    onChange(e)
                    setSelectedSpecialization(e.target.value)
                }}
                value={selectedSpecialization}
            >
                <Option value={''}>Wybierz specjalizajcę</Option>
                {
            specializationArray.map((specialization,index) => {
            return (
            <Option key={index} value={specialization} data-id="spec">{specialization}</Option>
            )
        })
                }
            </SelectSpecialization>
            </ContainerSpecialization>
        )
    }
    const generateHours = () => {
        const startHour = 8;
        const endHour = 18;
        const intervalMinutes = 30;

        for (let hour = startHour; hour <= endHour; hour++) {
        for (let minute = 0; minute < 60; minute += intervalMinutes) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const time = `${formattedHour}:${formattedMinute}`;
        const isCheck = false
        hours.push({time,isCheck});
        }
    }
        return hours;
    }
    const generateSlots = () => {
        generateHours()
        const changeState = (e, number) => {
            const markedHoursArray = hoursArray.map((patient, index) => {
              if (index === number) {
                patient.isCheck = !patient.isCheck
              }
              return patient;
            });
            setIsHoursArray(markedHoursArray);
        }
        return (
            <ContainerSlots>
                {
                hoursArray.map((patient,index) => {
                    return (
                        <CheckboxesContainer
                            key={index}    
                                >
                            <SingleCheckbox col = {patient.isCheck}>
                            <HourParagraph>{patient.time}</HourParagraph>
                            <HiddenCheckbox type="checkbox" checked = {patient.isCheck} name={`patient-${index}`} value={patient.isCheck ? '' : patient.time} onClick={(e) => changeState(e,index)} onChange={onChange}></HiddenCheckbox>
                            </SingleCheckbox>
                        </CheckboxesContainer>
                    )
                })
                }
            </ContainerSlots>
        )
    }
    const headerForm = () => {
        return (
            <FormTitle>
                <IconTitle icon={faUserDoctor}/>
                <HeaderTitle>{title}</HeaderTitle>
            </FormTitle>
        )
    }
    const sendDoctorData = (e) => {
        e.preventDefault()
        const dataValidationArray = validationDoctorForm(data)
        setIsMistakesForm(dataValidationArray)
        const dataValidationProfession = validationSpecializationDoctorForm(data)
        setIsProfession(dataValidationProfession)
        const dataValidationOfficeSlots = validationOfficeHoursDoctorForm(data)
        setIsSlotsOffice(dataValidationOfficeSlots)
        if(dataValidationArray.length === 0 && dataValidationProfession.length === 0 && dataValidationOfficeSlots.length > 0){
            
            hoursArray.map((hour) => {
                return hour.isCheck = false
            })
            sendData(doctorFormValue,changeState)
            setSelectedSpecialization('')

        }
    }
    const formMistakes = () => {      
        const errorsArray = mistakesForm.filter(key => !dataArray.hasOwnProperty(key));
        return dataArray.map((item) => {
                errorsArray.map((error) => {
                   if(item.name === error.name || item.surname === error.name || item.phoneNumber === error.name){
                        item.correct = false
                      }
                })
                return item
        })
        
    };
    const printErrorMessage = (mistakesArr) => {
        return mistakesArr.map((message,index) => {
            return (
                <ErrorMessage key={index}>{message.message}</ErrorMessage>
                )
        })
    }

return (
    <>
    {headerForm()}
    <CloseButton onClick={closeForm} icon={faXmark}/>
    {
        mistakesForm.length === 0 ?
        <>
        {dataForm()}
        </>
        :
        <>
        {dataForm(formMistakes())}
        <ContainerErrorMessage>
        {printErrorMessage(mistakesForm)}
        </ContainerErrorMessage>
        </>
    }
    {
        profession.length === 0 ?
        <>
        {specializationOptions()}
        </>
        :
        <>
        {specializationOptions()}
        <ContainerErrorMessage>
        {printErrorMessage(profession)}
        </ContainerErrorMessage>
        </>
    }
    <ParagraphOfficeHoursContainer>
     <IconOfficeHours icon={faHourglassStart}/>
     <HourParagraph>Godziny pracy</HourParagraph>
    </ParagraphOfficeHoursContainer>
    {
        slotsOffice > 0 ?
        <>
        {generateSlots()}
        </>
        :
        <>
        {generateSlots()}
        <ContainerErrorMessage>
            {printErrorMessage(slotsOffice)}
        </ContainerErrorMessage>
        </>
    }
        <ContainerSendButton>
                <SendDoctorButton
                    onClick={(e) => sendDoctorData(e)}
                >Zapisz lekarza</SendDoctorButton>
            </ContainerSendButton>
    </>
)
}

export {DoctorContainer,DoctorForm,AddDoctorButton,SendDoctorButton,ContainerSendButton}
