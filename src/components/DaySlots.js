/* eslint-disable array-callback-return */
import React from 'react'
import {faXmark,faCalendarDays,faUserXmark} from '@fortawesome/free-solid-svg-icons'
import patientList from '../helpers/patientList'
import renderChoicePatient from '../helpers/renderChoicePatient'
import sortedArray from '../helpers/sortedArray'
import {ContainerCalendar,ContainerDay,SlotDate,ContainerDate,Slots,PatientName,Hours,CloseButton,CalendarIcon,DeleteIcon,DaySlot,SelectPatients,Option,SaveButton} from '../styled/StyledSlots'

const DaySlots = (props) => {

    const {hour,hourPatient,patient,patientsName,searchText,selectChoicePatient,startData,selectedOptionPatients} = props

    const reservationVisits = startData.length > 0 ? Object.keys(startData[0]) : []
    const isPatientInReservations = reservationVisits.includes(hourPatient);
      
    const [patientData,setIsPatientData] = React.useState('')
    const [active,setIsActive] = React.useState(isPatientInReservations)

    const [, setSelectedPatients] = React.useState();

    const patientsNameArr = patientList(patientsName)

    const searchKeys = Object.entries(searchText)
        patientsNameArr.map((item) => {
            return Object.values(item)
                .map((item) => {
                    if(item?.name && item.surname){
                        const fullName =  item.name + " " + item.surname
                        return fullName 
                    }
                }).filter((item) => item)
    })

    const renderFreePatients = renderChoicePatient(patientsNameArr,startData,selectedOptionPatients)
    const sortedNamesArray = sortedArray(renderFreePatients)

    searchKeys.map((el) => {
        if(el[1].length >= 2){
           return patientsNameArr.filter((patient) => {
                const fullName = patient[0].name + ' ' + patient[0].surname
                return fullName.toLowerCase().includes(el[1].toLowerCase())
            })
        }
        return []
    })

    const changeActive = (e) => {
        const {value,name} = e.target
        setIsPatientData(value)
        setIsActive(!active)
       
        setSelectedPatients((prevSelectedPatients) => ({
            ...prevSelectedPatients,
            [name]: value,
          }))

    }
    const deleteActive = (e) => {
        e.preventDefault()
        setIsActive(false)
        selectChoicePatient({hourPatient,'patient':e.target.value,hour:hour, 'active': active})
    }

    const reservationPatientName = () => {
                const patientName = startData.map(item => {
                    return Object.entries(item).find((data) => {
                        if(data[0] === hourPatient){
                            return data[1]
                        }
                    })
                  }).filter(item => item);

            return patientName[0][1]
        }

    return (
        <Slots>
            <Hours>{hour}</Hours>
            {
                active === true ?
                <>
                <PatientName
                    name = {patient}
                    >{ patientData || reservationPatientName() }</PatientName>
                </>
                :
                <>
                <SelectPatients name={hourPatient} onChange={(e) => {
                    changeActive(e)
                    selectChoicePatient({hourPatient,'patient':e.target.value,'active': active,hour})
                }} >
                <Option value={''}> Wybierz pacjenta </Option>
                {                    
                        sortedNamesArray.map((item,index) => {
                        return (
                            <Option key={index} value={(item)}>{item}</Option>
                            )
                        })
                    }
                </SelectPatients>
                </>
            }

        {
            active === true ?
            <>
        <DeleteIcon
            icon={faUserXmark}
            onClick={(e) => deleteActive(e)}
            name={hourPatient}
            />
        </>
        :
        null
        }
        </Slots>
    )
}

const CloseButtonStyled = (props) => {
    const {onClick} = props
    return (
        <CloseButton icon={faXmark}
            onClick={onClick}
            ></CloseButton>
    )
}

const DateSlot = (props) => {
    const {date} = props
    return (
        <SlotDate>
        <CalendarIcon icon={faCalendarDays}/>
        {date}</SlotDate>
    )
}

export {ContainerDay,Slots,ContainerCalendar,CloseButtonStyled,SlotDate,ContainerDate,DaySlots,DaySlot,SaveButton,DateSlot}
