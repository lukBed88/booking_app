import parseDate from "./parseDate"
import updatePatientVisit from "../apiEndpoints/updatePatientVisit"

const patientIdWithReservationSlot = (patientsData,selectedPatients,tab,selectOption,dateTime) => {
    const entriesPatientArray = Object.entries(patientsData)
    const visit = {date: '', doctor:'',hour:'',doctorId:''}
    
    const fullDate = parseDate(dateTime)

    const doctorName = tab.map((item) => {
        if(item[0] === selectOption){
            const doctorId = item[0]
            const name = item[1].name
            const surname = item[1].surname
            const doctorFullName = name + " " + surname
            return {
                doctorFullName,
                doctorId
            }
        }
    }).filter((item) => {
        return item
    })

    entriesPatientArray.map((data) => {
            const name = data[1]?.patient?.imie
            const surname = data[1]?.patient?.nazwisko
            const full = surname + " " + name
            const patientId = data[0]
            return Object.entries(selectedPatients).map((patient) => {
                if(full === patient[1].patient){
                    const nVisit = { ...visit };
                    nVisit.hour = patient[1].hour
                    nVisit.doctor = doctorName[0].doctorFullName
                    nVisit.doctorId = doctorName[0].doctorId
                    nVisit.date = fullDate
                    updatePatientVisit(patientId,nVisit)
                }
            })
        })
}

export default patientIdWithReservationSlot
