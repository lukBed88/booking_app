import { getIDToken } from "../auth"

const UPDATE_PATIENT_VISIT_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/patients'
export const updatePatientVisit = (patientID,visit) => {
    const token = getIDToken()
    console.log('TOKEN ' ,token)

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({visit})
    }

    return fetch(`${UPDATE_PATIENT_VISIT_DATA_URL}/${patientID}/patient/visits.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        console.log(data)
    })
}

export default updatePatientVisit