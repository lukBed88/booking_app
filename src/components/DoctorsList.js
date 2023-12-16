import React from "react";
import {faXmark,faUserDoctor,faKitMedical,faPhone,faUserSlash} from '@fortawesome/free-solid-svg-icons'
import deleteDoctor from "../apiEndpoints/deleteDoctor";
import {
    ContainerDoctors,
    ContainerPatientCard,
    DoctorDataLi,
    HeaderContainer,
    ContainerIconUser,
    IconUser,
    IconFormUser,
    DoctorNameHeader,
    DoctorNameParagraph,
    DoctorNameDescribe,
    ButtonCloseDoctorCard,
    DoctorDataContainer,
    DoctorData,
    ButtonDeleteDoctor,
    TitleHeader,
} from '../styled/StyledDoctorsList'
import allVisitsOnThePatientSide from "../helpers/allVisitsOnThePatientSide";
import deleteVisitOnThePatientSide from "../apiEndpoints/deleteVisitOnThePatientSide";
import StyledConfirmWindow from "../styled/StyledConfirmWindow";

const DoctorsList = (props) => {

    const [visible,setIsVisible] = React.useState(false)
    const [idDoctor,setIsId] = React.useState()
    const [delDoctor,setDelDoctor] = React.useState(false) 

    const {doctorTab,remove,patientTab} = props

    const doctorList = () => {
        const doctorArray = doctorTab.map((doctor,index) => {
            const doctorFullName = doctor[0].name + " " + doctor[0].surname
            return (
                <DoctorDataLi 
                    isActive={delDoctor}
                    key={index} 
                    data-id = {doctor[0].id}
                    onClick={(e) => choiceDoctor(e)}
                    >
                    {`${index + 1}.${doctorFullName}`}
                </DoctorDataLi>
            )
        })
        return doctorArray
    }

    const choiceDoctor = (e) => {
        e.preventDefault()
        const idPatient = e.target.getAttribute("data-id");
        setIsId(idPatient)
        setIsVisible(true)
    }

    const doctorName = () => {
        return doctorTab.map((doctor) => {
            const doctorFullName = doctor[0].name + " " + doctor[0].surname
            if(doctor[0].id === idDoctor){
                return doctorFullName
            }
        }).filter((item) => item)
    }

    const removeDoctor = async (e) => {
        e.preventDefault()
        const {name} = e.target
        if(name === 'yes'){
        const bookedVisitsRemovedDoctor = allVisitsOnThePatientSide(patientTab,idDoctor)

        if (bookedVisitsRemovedDoctor.length > 0) {
            await Promise.all(bookedVisitsRemovedDoctor.map(async(data,index) => {
                for(const key in data){
                await deleteVisitOnThePatientSide(data[key].patientID,data[key].visitID)
            }
        }))
    }
        await deleteDoctor(idDoctor)
        setIsVisible(false)
        setIsId(!idDoctor)
        remove()
        }
    setDelDoctor(false)

    }

    const doctorData = () => {
        const doctorData = doctorTab.map((doctor,index) => {
            if(doctor[0].id === idDoctor){
                return (
                <div key={index}>
            <DoctorDataContainer><IconFormUser icon={faPhone}/><DoctorData><DoctorNameParagraph>{doctor[0].phoneNumber}</DoctorNameParagraph><DoctorNameDescribe>Telefon</DoctorNameDescribe></DoctorData></DoctorDataContainer>
            <DoctorDataContainer><IconFormUser icon={faKitMedical}/><DoctorData><DoctorNameParagraph>{doctor[0].specialization}</DoctorNameParagraph><DoctorNameDescribe>Specjalizacja</DoctorNameDescribe></DoctorData></DoctorDataContainer>
                </div>
                
                )
            }
        })
        return doctorData
    }

    const changeOnRemove = () => {
        console.log('changeOnRemove')
        setDelDoctor(true)
    }

    return (
        <>
        <ContainerDoctors>
            <TitleHeader>Lekarze</TitleHeader>
            {doctorList()}
        {
            visible === true ?
            <ContainerPatientCard>
                <HeaderContainer>
                    <ContainerIconUser>
                        <IconUser icon={faUserDoctor}/>
                    </ContainerIconUser>
                        <DoctorNameHeader>{doctorName()}</DoctorNameHeader>
                        <ButtonCloseDoctorCard 
                        isActive={delDoctor}
                        icon={faXmark} 
                        onClick={() => setIsVisible(false)}/>
                </HeaderContainer>
                <ButtonDeleteDoctor 
                isActive={delDoctor}
                icon={faUserSlash} 
                onClick={() => changeOnRemove()}/>
                {/* <ButtonDeleteDoctor icon={faUserSlash} onClick={() => removeDoctor()}/> */}
                        {doctorData()}
            </ContainerPatientCard>
            :
            null    
        }
        </ContainerDoctors>
        {
            delDoctor === true ?
            <StyledConfirmWindow
                onClick={(e) => removeDoctor(e)}
            />
            :
            null
        }
        </>
    )
}

export {DoctorsList}