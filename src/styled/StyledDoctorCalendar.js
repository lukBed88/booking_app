import styled from "styled-components";
import Calendar from 'react-calendar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ContainerCalendar = styled.div`
      display: flex;
      width: 20vw;
      justify-content: center;
      align-self: flex-start;
      z-index: ${props => props.active ? '-1' : '1'};
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    position: absolute;
    transform: translate(990%,90%);
    font-size: 20px;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 1;
    &:hover{
      transition: all 0.3s;
      color:#50b8e7;
    }
`
const DiaryStyled = styled(Calendar)`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border: 2px solid black;
      border-radius: 18px;
      justify-content: center;
      align-items: center;
      padding: 15px;

    .react-calendar__navigation {
      display: flex;
      width: 100%;
      margin: 20px;
      justify-content: center;
      align-self: center;
      padding: 20px;
      &:hover{
      transition: all 0.3s;
      color:#50b8e7;
    }
    }
    .react-calendar__navigation__label {
      background-color: transparent;
      font-size: 14px;
      text-transform: uppercase;
      border: none;
      padding: 6px;
      color: black;
      &:hover{
      transition: all 0.3s;
      color:#50b8e7;
    }
    }
    .react-calendar__navigation__arrow {
      font-size: 22px;
      color: black;
      background-color: transparent;
      margin-right:10px;
      width: 30px;
      border: none;
      cursor: pointer;
      color: black;
      &:hover{
      transition: all 0.3s;
      color:#50b8e7;
    }
    }
    .react-calendar__month-view {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .react-calendar__month-view__weekdays {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      box-sizing: border-box;
      color: white;
      background-color: #50b8e7;
      padding: 20px 0;

    }

    .react-calendar__month-view__weekdays__weekday {
      letter-spacing: 1px;
      font-size: 16px;
      text-align: center;
      text-transform: uppercase;
      width: calc(100% / 7);
      & abbr {
        text-decoration: none;
    }
    }
    .react-calendar__tile {
      position: relative;
      flex-basis: calc(14.28% - 10px);
      flex-grow: 1;
      max-width: calc(14.28% - 10px);
      margin: 6px;
      height: 40px;
      cursor: pointer;
      font-size: 16px;
      transition: 0.3s;
      box-sizing: border-box;
      border: none;
      transition: all 0.3s;
    }

    .react-calendar__month-view__days {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 20px 0;
    }    
    .react-calendar {
      display: flex;
    }
`
const CustomTile = styled.div`
  width: 105%;
  height: 105%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.colorFont};
  transition: all 0.3s;
  font-size: 18px;
  &:hover{
    transition: all 0.3s;
    background-color:#84cdee;
    color: white;
  }
`;

export {ContainerCalendar,StyledFontAwesomeIcon,DiaryStyled,CustomTile}