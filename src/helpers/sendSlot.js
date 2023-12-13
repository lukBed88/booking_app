import postDoctorsData from "../apiEndpoints/postDoctorsData"
import parseDate from "./parseDate"
import patientIdWithReservationSlot from "./patientIdWithReservationSlot"

const sendSlot = async (props) => {
    const {e,tab,selectOption,dateTime,selectedPatients,
        patientsData,
        onSendSlotValue } = props

    e.preventDefault()
        const date = parseDate(dateTime)
        const entriesArr = Object.entries(selectedPatients)
        const valueSlot = {};

        const patientArray = entriesArr.map((item) => {
            const patientNumber = item[0]
            if(item[1]?.patient){
                const patientData = item[1].patient
                return {
                    [patientNumber]: patientData
                }
            }
        }).filter((item) => item)

        patientArray.forEach((tab) => {
        for (const key in tab) {
        valueSlot[key] = tab[key];
        }
        });

        await postDoctorsData(selectOption,{valueSlot,date})
        patientIdWithReservationSlot(patientsData,selectedPatients,tab,selectOption,dateTime)
        onSendSlotValue()
    
}

export default sendSlot