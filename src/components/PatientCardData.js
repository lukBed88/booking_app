import React from "react";
import idSlotDay from "../helpers/idSlotDay";
import slotsVisit from "../helpers/slotsVisit";
import deleteDoctorsData from "../apiEndpoints/deleteDoctorsData";
import deleteVisitOnThePatientSide from "../apiEndpoints/deleteVisitOnThePatientSide";
import deletePatient from "../apiEndpoints/deletePatient";
import {faUser,faCalendarDays,faClock} from '@fortawesome/free-regular-svg-icons'
import {faPhone,faIdCard,faHouseChimney,faXmark,faUserDoctor,faUserSlash} from '@fortawesome/free-solid-svg-icons'
import deleteDaySlot from "../apiEndpoints/deleteDaySlot";
import {ContainerPatientCard,HeaderContainer,ContainerIconUser,IconUser,IconFormUser,PatientNameHeader,PatientVisitParagraph,
    PatientNameParagraph,PatientNameDescribe,PatientDataContainer,PatientData,PatientVisitContainer,PatientVisitCard,
    IconPatientVisit,PatientVisitInfo,ButtonDeleteVisit,ButtonDeletePatient,ButtonClosePatientCard} from '../styled/StyledPatientCard'

const PatientCardData = (props) => {

    const {patientId,listOfPatient,listOfDoctors,deleteVisit,hidePatientCard} = props
    let visitsArray = []

    const patientData = () => {
        const selectedPatient = listOfPatient.map((patient) => {
            if(patient[0] === patientId){
                return patient
            }
        }).filter((item) => item)

        const patientName = selectedPatient.map((patientData) => {
            const fullName = patientData[1].patient.imie + ' '+ patientData[1].patient.nazwisko
            return fullName
        })

        return patientName
    }

    const addPatientData = () => {
        const choicePatient = listOfPatient.map((patient) => {
            if(patient[0] === patientId){
                return patient
            }
        }).filter((item) => item)

        const selectedPatient = choicePatient.map((patientData,index) => {
            const fullName = patientData[1].patient.imie + ' '+ patientData[1].patient.nazwisko
            if(patientData[1]?.patient?.visits){
                const patientVisitsId = Object.keys(patientData[1].patient.visits).map((visitId) => visitId)
                const patientVisits = Object.values(patientData[1].patient.visits).map((patient,index) => {
                    return {
                        patientName: fullName,
                        patientId:patientId, 
                        visitId: patientVisitsId[index],
                        date:patient.visit.date,
                        doctor:patient.visit.doctor,
                        doctorId:patient.visit.doctorId,
                        hour:patient.visit.hour,
                        phoneNumber:patient.phoneNumber
                    }
                })
                visitsArray.push(patientVisits)
            }

                    return (
                    <div key={index}>
                    <PatientDataContainer><IconFormUser icon={faIdCard}/><PatientData><PatientNameParagraph>{patientData[1].patient.pesel}</PatientNameParagraph><PatientNameDescribe>Pesel</PatientNameDescribe></PatientData></PatientDataContainer>
                    <PatientDataContainer><IconFormUser icon={faHouseChimney}/><PatientData><PatientNameParagraph>{patientData[1].patient.adres}</PatientNameParagraph><PatientNameDescribe>Adres</PatientNameDescribe></PatientData></PatientDataContainer>
                    <PatientDataContainer><IconFormUser icon={faPhone}/><PatientData><PatientNameParagraph>{patientData[1].patient.phoneNumber}</PatientNameParagraph><PatientNameDescribe>Telefon</PatientNameDescribe></PatientData></PatientDataContainer>
                    <PatientVisitParagraph>Umówione wizyty</PatientVisitParagraph>
                    </div>
            )
        })

        return selectedPatient
    }

    const addPatientVisits = (visitsArray) => {
        const patientVisits = visitsArray[0].map((visit) => {
            const patientData = visit.patientName.split(' ');
            const patientName = patientData[1] + " " + patientData[0]
            const doctorId = visit.doctorId
            const date = visit.date
            const patientId = visit.patientId
            const visitId = visit.visitId
            return(
               <PatientVisitCard key={visit.visitId}>
            <PatientVisitInfo><IconPatientVisit icon={faCalendarDays}/>{visit.date}</PatientVisitInfo>
            <PatientVisitInfo><IconPatientVisit icon={faUserDoctor}/>{visit.doctor}</PatientVisitInfo> 
            <PatientVisitInfo><IconPatientVisit icon={faClock}/>{visit.hour}</PatientVisitInfo> 
            <ButtonDeleteVisit onClick={(e) => {
                removeVisit(e,doctorId,date,patientName,patientId,visitId)
            }}>Odwołaj wizytę</ButtonDeleteVisit>
               </PatientVisitCard>
            )
        })

        return patientVisits
    }

    const removeVisit = async (e,doctorId,date,patientName,patientId,visitId) => {
        e.preventDefault()
        const doctorVisitDayId = idSlotDay(listOfDoctors,doctorId,date)
        const doctorSlotReservations = slotsVisit(listOfDoctors,doctorId,date)
        const idSlot = idSlotDay(listOfDoctors,doctorId,date)
        const doctorVisitLength = Object.entries(doctorSlotReservations[0])
        await Promise.all(Object.values(doctorSlotReservations).map(async (visit) => {
            for(const key in visit){
                if(visit[key] === patientName){
                    await deleteDoctorsData(doctorId,doctorVisitDayId,key)
                }
                if(doctorVisitLength.length === 1){
                    await deleteDaySlot(doctorId,idSlot)
                }
            }
        }))  
        await deleteVisitOnThePatientSide(patientId,visitId)
        deleteVisit()
    }

    const removePatient = async () => {
        await deletePatient(patientId)
        deleteVisit()
    }

    return (
        <ContainerPatientCard>
            <HeaderContainer>
                <ContainerIconUser>
                    <IconUser icon={faUser}/>
                </ContainerIconUser>
                    <PatientNameHeader>{patientData()}</PatientNameHeader>
            </HeaderContainer>
            <ButtonDeletePatient icon={faUserSlash} onClick={() => removePatient()}>Odwołaj wizytę</ButtonDeletePatient>
            <ButtonClosePatientCard
                icon={faXmark}
                onClick={hidePatientCard}
            />
            {addPatientData()}
            {
                visitsArray.length > 0 ?
                <PatientVisitContainer>
                {addPatientVisits(visitsArray)}
                </PatientVisitContainer>
                :
                null
            }
        </ContainerPatientCard>
    )
}

export default PatientCardData