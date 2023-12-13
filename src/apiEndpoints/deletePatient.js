import { getIDToken } from "../auth"

const DELETE_PATIENT_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/patients'

export const deletePatient = (patientId) => {
    const token = getIDToken()
    const options = {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${DELETE_PATIENT_DATA_URL}/${patientId}/.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default deletePatient