import React from "react";
import deleteDaySlot from "../apiEndpoints/deleteDaySlot";
import idSlotDay from "../helpers/idSlotDay";
import slotsVisit from "../helpers/slotsVisit";
import { CloseButtonStyled, ContainerDate, ContainerDay, DateSlot, DaySlots, SaveButton } from "./DaySlots";
import { ContainerSendButton } from "./DoctorForm";
import updateSlot from "../helpers/updateSlot";
import sendSlot from "../helpers/sendSlot";
import parseDate from "../helpers/parseDate";

const RenderSlots = (props) => {
    const {isSlotsVisible,tab,selectOption,dateTime,slots,
           valueSlot,patientTab,patientsData,selectedPatients,closeCalendarDay,
           choicePatient,
            addChoicePatientToState,
            onUpdateSlotValue,
            onSendSlotValue
        } = props

    const fullDate = parseDate(dateTime)
            if(isSlotsVisible === true){
                const slotValue = slotsVisit(tab,selectOption,dateTime)
                const slotID = idSlotDay(tab,selectOption,dateTime)
                if(slotValue.length === 0 && slotID !== undefined){
                     deleteDaySlot(selectOption,slotID)
                }

            const checkSlotValue = slotValue.length > 0 ? Object.entries(slotValue[0]) : []
            const daySlots = slots.map((slot,index) => {
                const findHour = checkSlotValue.find(({...el}) => {
                if(el[0] === `patient-${index}`){
                    return el
                        }
                })
                    return (
                        <DaySlots
                        key={index}
                        hour = {slot.time}
                        selectChoicePatient={(selectedValue) => addChoicePatientToState(selectedValue)}
                        valueName = {(e) => choicePatient(e)}
                        searchText = {valueSlot}
                        hourPatient = {`patient-${index}`}
                        value = {findHour !== undefined ? findHour[1]: undefined}
                        patientsName = {patientTab}
                        startData = {slotsVisit(tab,selectOption,dateTime)}
                        selectedOptionPatients = {selectedPatients}
                        />
                    )
                })

                return (
                    <ContainerDay>
                        <form>
                            <ContainerDate>
                                <DateSlot date = {fullDate} name = 'term' key={fullDate}></DateSlot>
                            <CloseButtonStyled
                            onClick={(e) => closeCalendarDay(e)}
                            />
                            </ContainerDate>
                            {daySlots}
                            <ContainerSendButton>
                            <SaveButton
                            onClick = {checkSlotValue.length > 0 ?
                            (e) => updateSlot({e,tab,selectOption,dateTime,selectedPatients,patientsData,onUpdateSlotValue}) 
                            : 
                            (e) => sendSlot({e,tab,selectOption,dateTime,selectedPatients,patientsData,onSendSlotValue})}
                            >Zapisz</SaveButton>
                            </ContainerSendButton>
                        </form>
                    </ContainerDay>
            )
            }     

}

export default RenderSlots