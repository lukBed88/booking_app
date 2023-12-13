import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerCalendar = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
`
const ContainerDay = styled.div`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    flex-direction: column;
    align-self: flex-start;
    max-width: 24vw;
    border: 2px solid black;
    background-color: white;
    border-radius: 8px;
    margin-left: 130px;
    z-index: 3;
`
const SlotDate = styled.p`
    font-size: 20px;
`
const ContainerDate = styled.div`
    display: flex;
    justify-content: center;
    background-color: rgb(80, 184, 231);
    color: white;
    border-radius: 6px;
    padding: 0 30px;
`
const Slots = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    width: 95%;
    margin: 10px 12px;
    max-height: 40px;
    border-radius: 5px;
    padding: 2px 0;
`
const PatientName = styled.div`
    color: white;
    background-color: rgb(80, 184, 231);
    padding: 4px 10px;
    border-radius: 5px;
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
    width: 60%;
    display: ${props => props.active === true ? 'none' : 'inline'};
`
const Option = styled.option`
    border: 2px solid red;
`
const SaveButton = styled.div`
        display: flex;
        justify-content: center;
        font-size: 16px;
        background-color: transparent;
        border: 1px solid black;
        padding: 10px 15px;
        margin:-10px 0;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          transition: 0.4s;
          color: white;
          background-color: #50b8e7;
          border: 1px solid #50b8e7;       
        }
`
export { ContainerCalendar,ContainerDay,SlotDate,ContainerDate,Slots,PatientName,Hours,CloseButton,CalendarIcon,DeleteIcon,DaySlot,SelectPatients,Option,SaveButton }
