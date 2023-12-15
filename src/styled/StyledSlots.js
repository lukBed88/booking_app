import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerCalendar = styled.div`
position: relative;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;

`
const ContainerDay = styled.div`
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    position: relative;
    flex-direction: column;
    align-self: flex-start;
    width: 24vw;
    border: 2px solid black;
    background-color: white;
    border-radius: 8px;
    margin-left: 130px;
    z-index: 3;
    @media ${props=> props.theme.media.tablet} {
        width: 33vw;
        }
    @media screen and (min-width: 600px) and (max-width: 770px) {
        position: absolute;
        width: 67%;
        top: 0;
        left: -8%;
        }
    @media ${props=> props.theme.media.mobile} {
        position: absolute;
        width: 94%;
        top: 0;
        right: 0;
        transform: translate(0,0);
        }

`
const SlotDate = styled.p`
    font-size: 20px;
    @media screen and (min-width: 600px) and (max-width: 770px) {
      font-size: 17px;
        }
`
const ContainerDate = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(80, 184, 231);
    color: white;
    border-radius: 6px;
    padding: 0 30px;
    margin-bottom: 20px;
`
const Slots = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    margin: 10px 5px;
    max-height: 40px;
    border-radius: 5px;
    padding: 2px 0;
    @media screen and (min-width: 600px) and (max-width: 770px) {
        width: 80%;
        margin: 8px auto;
        }
    @media ${props=> props.theme.media.mobile} {
        width: 80%;
        margin: 8px auto;
        }
`
const PatientName = styled.div`
    color: white;
    background-color: rgb(80, 184, 231);
    padding: 4px 10px;
    border-radius: 5px;
    font-size: 16px;
`
const Hours = styled.p`
    display: block;
    max-width: 50px;
    margin-right:10px;
    margin-left:5px;
    margin-block-start: 0;
    margin-block-end: 0;
    color: grey;
    font-size: 16px;
    @media screen and (min-width: 600px) and (max-width: 770px) {
      font-size: 14px;
        }
`
const CloseButton = styled(FontAwesomeIcon)`
    position: absolute;
    top: 4%;
    left: 93%;
    transform: translate(-50%,-50%);
    font-size: 20px;
    transition:all 0.4s;
    color: white;
    cursor: pointer;
    &:hover {
        transition:all 0.4s;
        color: black;
        }
    @media screen and (min-width: 600px) and (max-width: 770px) {
        top: 3%;
        left: 90%;
        }
`
const CalendarIcon = styled(FontAwesomeIcon)`
    margin-right:12px;
    font-size: 20px;
`
const DeleteIcon = styled(FontAwesomeIcon)`
    margin-top: 4px;
    margin-left: 8px;
    font-size: 20px;
    color: rgb(80, 184, 231);
    cursor: pointer;
    transition:all 0.4s;
    &:hover {
        transition:all 0.4s;
        color: black;
    }
`
const DaySlot = styled.button`
`
const SelectPatients = styled.select`
    border: 2px solid black;
    width: 47%;
    display: ${props => props.active === true ? 'none' : 'inline'};
        @media screen and (min-width: 600px) and (max-width: 770px) {
            width: 75%;
        }
`

const Option = styled.option`
`
const SaveButton = styled.div`
        display: flex;
        justify-content: center;
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 10px 15px;
        margin: 0 0 -10px 0;
        width: 80%;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
        @media screen and (min-width: 600px) and (max-width: 770px) {
            font-size: 14px;
            width: 35%;
            margin: 5px auto;
            padding: 10px 5px;
        }
        @media ${props=> props.theme.media.mobile} {
            width: 30%;
            padding: 10px 5px;
        }
`
export { ContainerCalendar,ContainerDay,SlotDate,ContainerDate,Slots,PatientName,Hours,CloseButton,CalendarIcon,DeleteIcon,DaySlot,SelectPatients,Option,SaveButton }
