import deletePatientVisitWithoutReservation from "./deletePatientVisitWithoutReservation";
import patientIdWithReservationSlot from "./patientIdWithReservationSlot";
import updateDoctorsData from "../apiEndpoints/updateDoctorsData";
import deleteDoctorsData from "../apiEndpoints/deleteDoctorsData";
import idSlotDay from "./idSlotDay";

const updateSlot = async (props) => { 
        const { e,tab,selectOption,dateTime,
            selectedPatients,patientsData,
            onUpdateSlotValue } = props;
        
        e.preventDefault()
        const dayID = idSlotDay(tab,selectOption,dateTime)
        const entriesSelectedPatients = Object.entries(selectedPatients)
        const patientArray = await Promise.all(entriesSelectedPatients.map(async(item) => {
            const patientNumber = item[0]
            const slotID = idSlotDay(tab,selectOption,dateTime)
            if(item[1]?.patient && item[1]?.patient !== '') {
                const patientData = item[1].patient
                return {
                    [patientNumber]: patientData
                }
            }
            if(item[1]?.patient === '' || item[1]?.patient === undefined){
                const patientNumber = item[1].hourPatient
                await deleteDoctorsData(selectOption,slotID,patientNumber)
            }
        }))

        await Promise.all(patientArray.map(async(patient) => {
            await updateDoctorsData(selectOption,dayID,patient)
        }))
        patientIdWithReservationSlot(patientsData,selectedPatients,tab,selectOption,dateTime)
        onUpdateSlotValue()
        deletePatientVisitWithoutReservation(patientsData,selectedPatients,dateTime)
    }

export default updateSlot