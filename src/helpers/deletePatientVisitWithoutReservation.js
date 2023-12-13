import deleteVisitOnThePatientSide from "../apiEndpoints/deleteVisitOnThePatientSide"
import parseDate from "./parseDate"
const deletePatientVisitWithoutReservation = async (patientsData,selectedPatients,dateTime) => {
    const fullDate = parseDate(dateTime);
    const entryPatientsData = Object.entries(patientsData);

    for (const [patientId, patientData] of entryPatientsData) {
        if (patientData?.patient?.visits) {
            const name = patientData.patient.imie;
            const surname = patientData.patient.nazwisko;
            const fullName = name + " " + surname;

            for (const [visitId, visitData] of Object.entries(patientData.patient.visits)) {
                const oldChoiceHour = visitData.visit.hour;
                const date = visitData.visit.date;
                
                for (const presentVisits of Object.values(selectedPatients)) {
                    const actuallyChoiceHour = presentVisits.hour;
                    const patientName = presentVisits.patient;

                    if (actuallyChoiceHour === oldChoiceHour && date === fullDate && patientName !== fullName) {
                        await deleteVisitOnThePatientSide(patientId,visitId)
                    }
                }
            }
        }
    }
    return null;
}

export default deletePatientVisitWithoutReservation


