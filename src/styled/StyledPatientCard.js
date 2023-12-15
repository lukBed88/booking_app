import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerPatientCard = styled.div`
        position: absolute;
        justify-content: center;
        width: 25vw;
        transform: translate(-30%,0%);
        border: 2px solid black;
        border-radius: 18px;
        background-color: white;
        z-index: 3;
        @media ${props=> props.theme.media.tablet} {
          width: 42vw;
        }

        @media ${props=> props.theme.media.mobile} {
            position: relative;
            top: 30%;
            left: 0;
            transform: translate(-30%,0);
            width: 55vw;
        }
` 
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #50b8e7;
    width: 100%;
    height: 20vh;
    justify-content: center;
    align-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    @media ${props=> props.theme.media.mobile} {
        margin-bottom: 30px;
        height: 9vh;
        padding: 10px 0;
        }
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
    @media ${props=> props.theme.media.tablet} {
         
        }
    @media ${props=> props.theme.media.mobile} {
        min-width: 45px;
        min-height: 45px;
        }
`
const IconUser = styled(FontAwesomeIcon)`
    font-size: 36px;
    color: #50b8e7;
    @media ${props=> props.theme.media.mobile} {
        font-size: 22px;
        }
`
const IconFormUser = styled(FontAwesomeIcon)`
    font-size: 26px;
    margin-left: 40px;
    color: #50b8e7;
    @media ${props=> props.theme.media.mobile} {
        margin-left: 10px;
        font-size: 20px;
        }
`
const PatientNameHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-block-start:0;
    margin-block-end:0;
    margin-top: 3px;
    color: white;
    @media ${props=> props.theme.media.mobile} {
        font-size: 1.2em;
        margin-top: 5px;
        }
`
const PatientVisitParagraph = styled.p`
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: black;
    @media ${props=> props.theme.media.mobile} {
        font-size: 16px;
        }
`
const PatientNameParagraph = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-weight: 200;
    font-size: 16px;
    @media ${props=> props.theme.media.mobile} {
        font-size: 14px;
        }
`
const PatientNameDescribe = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-size: 12px;
    font-weight:200;
    text-transform: uppercase;
`
const PatientDataContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin: 15px 0;
    @media ${props=> props.theme.media.tablet} {
        width: 75%;
        margin: 15px auto;
        }
    @media ${props=> props.theme.media.mobile} {
        margin: 15px auto;
        width: 75%;
        }
`
const PatientData = styled.div`
    margin-left: 20px;
    font-size: 16px;
    font-weight: 600;
    margin-block-start:0;
    margin-block-end:0;

`
const PatientVisitContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px 0;
    padding-inline-start:0;
    padding-inline-end:0;
    margin-inline-end: 0;
    margin-inline-start: 0;
    @media ${props=> props.theme.media.tablet} {
        width: 75%;
        margin: 15px auto;
        }
    @media ${props=> props.theme.media.mobile} {
        margin: 15px auto;
        width: 75%;
        justify-content: space-between;
        }
`
const PatientVisitCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    border-radius: 10px;
    border: 1px solid black;
    padding: 10px 0;
    margin: 5px 0;
`
const IconPatientVisit = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: #50b8e7;
    margin-right: 10px;
    @media ${props=> props.theme.media.mobile} {
        font-size: 14px;
        }
`
const PatientVisitInfo = styled.p`
    margin-left: 20px;
    font-size: 16px;
    font-weight: 200;
    margin-block-start:0;
    margin-block-end:0;
    padding: 6px 0;
    @media ${props=> props.theme.media.tablet} {
        margin-left: 0;
        text-align: center;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 13px;
        margin-left: 10px;
        }
`
const ButtonDeleteVisit = styled.button`
    display: flex;
    margin: 10px auto 5px auto;
    padding: 5px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        background-color: #50b8e7;
        border: 1px solid #50b8e7;
        color: white;
        transition: 0.5s;
    }
`
const ButtonDeletePatient = styled(FontAwesomeIcon)`
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
    @media ${props=> props.theme.media.mobile} {
        font-size: 18px;
        }
`
const ButtonClosePatientCard = styled(FontAwesomeIcon)`
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
    @media ${props=> props.theme.media.mobile} {
        font-size: 18px;
        }
`
export {
    ContainerPatientCard,
    HeaderContainer,
    ContainerIconUser,
    IconUser,
    IconFormUser,
    PatientNameHeader,
    PatientVisitParagraph,
    PatientNameParagraph,
    PatientNameDescribe,
    PatientDataContainer,
    PatientData,
    PatientVisitContainer,
    PatientVisitCard,
    IconPatientVisit,
    PatientVisitInfo,
    ButtonDeleteVisit,
    ButtonDeletePatient,
    ButtonClosePatientCard
}