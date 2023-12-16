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
        background-color: white;
        z-index: 6;
        @media ${props=> props.theme.media.tablet} {
          width: 26vw;
        }
        @media ${props=> props.theme.media.mobile} {
            position: relative;
            top: 30%;
            left: 0;
            transform: translate(-30%,0);
            width: 35vw;
        }
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
    z-index:${(props) => props.isActive ? '-1' : '3'};
    filter: blur(${(props) => props.isActive ? '1px' : 'none'});
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
    height: 20vh;
    justify-content: center;
    align-content: center;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    @media ${props=> props.theme.media.tablet} {
        margin-bottom: 30px;
        height: 16vh;
        padding: 10px 0;
        }
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
        min-width: 65px;
        min-height: 65px;
        }
    @media ${props=> props.theme.media.mobile} {
        min-width: 45px;
        min-height: 45px;
        }
`
const IconUser = styled(FontAwesomeIcon)`
    font-size: 36px;
    color: #50b8e7;
    @media ${props=> props.theme.media.tablet} {
        font-size: 30px;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 24px;
        }
`
const IconFormUser = styled(FontAwesomeIcon)`
    font-size: 26px;
    margin-left: 40px;
    color: #50b8e7;
    @media ${props=> props.theme.media.tablet} {
        margin-left: 30px;
        font-size: 24px;
        }
    @media ${props=> props.theme.media.mobile} {
        margin-left: 10px;
        font-size: 16px;
        }
`
const DoctorNameHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-block-start:0;
    margin-block-end:0;
    margin-top: 3px;
    color: white;
    @media ${props=> props.theme.media.tablet} {
        font-size: 1.4em;
        margin-top: 5px;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 1em;
        margin-top: 5px;
        }
`
const DoctorNameParagraph = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-weight: 200;
    font-size: 16px;
    text-transform: uppercase;
    @media ${props=> props.theme.media.mobile} {
        font-size: 11px;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 12px;
        }
`
const DoctorNameDescribe = styled.p`
    margin-block-end:0;
    margin-block-start:0;
    color: black;
    font-size: 12px;
    font-weight:200;
    text-transform: uppercase;
    @media ${props=> props.theme.media.tablet} {
        font-size: 11px;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 11px;
        }
`
const ButtonCloseDoctorCard = styled(FontAwesomeIcon)`
    position: absolute;
    top: 3%;
    left: 93%;
    transform: translate(-50%,0%);
    font-size: 22px;
    color: white;
    cursor: pointer;
    display:${(props) => props.isActive ? 'none' : 'block'};
    transition: 0.5s;
    &:hover {
        color: black;
        transition: 0.5s;
    }
    @media ${props=> props.theme.media.tablet} {
        top: 4%;
        left: 90%;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 18px;
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
    top: 4%;
    left: 7%;
    transform: translate(-50%,0%);
    font-size: 22px;
    color: white;
    cursor: pointer;
    /* color:${(props) => props.isActive ? 'red' : 'blue'}; */
    display:${(props) => props.isActive ? 'none' : 'block'};
    transition: 0.5s;
    &:hover {
        color: black;
        transition: 0.5s;
    }
    @media ${props=> props.theme.media.tablet} {
        top: 5%;
        left: 9%;
        font-size: 20px;
        }
    @media ${props=> props.theme.media.mobile} {
        font-size: 16px;
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