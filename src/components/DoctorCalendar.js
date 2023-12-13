import React from "react";
import 'react-calendar'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {ContainerCalendar,StyledFontAwesomeIcon,DiaryStyled,CustomTile} from '../styled/StyledDoctorCalendar'

const isWeekend = (date) => {
  if (!date || !(date instanceof Date)) {
    return false;
  }
  const day = date.getDay();
  return day === 0 || day === 6;
};

const DoctorCalendar = (props) => {
    const {onChange, value ,tileContent,close,onClickDayCalendar,activeDay} = props;
    const customTileContent = ({ date, view }) => {
      if (view === 'month') {
        if (isWeekend(date)) {
          return null; 
        }
      }
      return tileContent({ date, view });
    };

    const tileDisabled = ({ date, view }) => {
      if (view === 'month') {
        return isWeekend(date);
      }
      return false;
    };

    return (
      <ContainerCalendar
      {...(activeDay && { active: activeDay.toString() })}
      >
        <StyledFontAwesomeIcon
        onClick={close}
        icon= {faXmark}/>
      <DiaryStyled
        onClickDay={onClickDayCalendar}
        onChange={onChange}
        value={value}
        tileContent={customTileContent}
        tileDisabled={tileDisabled}
        view="month"
      />
        </ContainerCalendar>
    );
  };

export {CustomTile,DoctorCalendar}

