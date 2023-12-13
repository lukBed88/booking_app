import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerDoctors = styled.div`
    display: flex;
    width: 50vw;
    justify-content: center;
    margin: 50px auto 0 auto;
    flex-direction: column;
`
const ContainerPatientCard = styled.div`
        position: absolute;
        justify-content: center;
        width: 25vw;
        top: 0;
        left: 50%;
        transform: translate(-50%,50%);
        border: 2px solid black;
        border-radius: 18px;
        background-color: transparent;
`
const DoctorDataLi = styled.li`
    display: flex;
    width: 30%;
    font-size: 18px;
    cursor: pointer;
    list-style: none;
    transition: 0.4s;
    margin: 3px 0 3px 0;
    color: rgb(105, 105, 105);
    &:hover {
        transition: 0.4s;
        color: rgb(80, 184, 231);
    }
    @media ${props=> props.theme.media.tablet} {
        width: 56%;
        font-size: 16px;
    }

    @media ${props=> props.theme.media.mobile} {
        width: 75%;
        font-size: 14px;
}
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #50b8e7;
    width: 100%;
    min-height: 20vh;
    justify-content: center;
    align-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`
const ContainerIconUser = styled.div`
    display: flex;
    min-width: 70px;
    min-height: 70px;
    justify-content: center;
    align-items: center;
    align-self: center;
    align-content: center;
    background-color: white;
    border-radius: 50%;
`
const IconUser = styled(FontAwesomeIcon)`
    font-size: 36px;
    color: #50b8e7;
`
const IconFormUser = styled(FontAwesomeIcon)`
    font-size: 26px;
    margin-left: 40px;
    color: #50b8e7;
`
const DoctorNameHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-block-start:0;
    margin-block-end:0;
    margin-top: 3px;
    color: white;
`
const DoctorNameParagraph = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-weight: 200;
    font-size: 16px;
    text-transform: uppercase;
`
const DoctorNameDescribe = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-size: 12px;
    font-weight:200;
    text-transform: uppercase;
`
const ButtonCloseDoctorCard = styled(FontAwesomeIcon)`
    position: absolute;
    top: 3%;
    left: 93%;
    transform: translate(-50%,0%);
    font-size: 22px;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        color: black;
        transition: 0.5s;
    }
`
const DoctorDataContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 15px 0;
`
const DoctorData = styled.div`
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    margin-block-start:0;
    margin-block-end:0;
`
const ButtonDeleteDoctor = styled(FontAwesomeIcon)`
    position: absolute;
    top: 3%;
    left: 6%;
    transform: translate(-50%,0%);
    font-size: 22px;
    color: white;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        color: black;
        transition: 0.5s;
    }
`
const TitleHeader = styled.h2`
    color:rgb(14, 134, 212);
    margin-top: 12px;
    font-weight: 300;
    @media ${props=> props.theme.media.tablet} {
        font-size: 1.4em;
        margin-block-start: 0.6em;
        margin-block-end: 0.6em;
    }

    @media ${props=> props.theme.media.mobile} {
        font-size:1.3em;
        margin-block-start: 0.4em;
        margin-block-end: 0.4em;
}
`

export {ContainerDoctors,ContainerPatientCard,DoctorDataLi,HeaderContainer,ContainerIconUser,IconUser,IconFormUser,DoctorNameHeader,DoctorNameParagraph,DoctorNameDescribe,ButtonCloseDoctorCard,DoctorDataContainer,DoctorData,ButtonDeleteDoctor,TitleHeader}