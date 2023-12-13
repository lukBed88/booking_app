import { getIDToken } from "../auth"

const DELETE_VISIT_PATIENT_SIDE_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/patients'

export const deleteVisitOnThePatientSide = (patientId,visitId) => {
    const token = getIDToken()
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    return fetch(`${DELETE_VISIT_PATIENT_SIDE_DATA_URL}/${patientId}/patient/visits/${visitId}.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default deleteVisitOnThePatientSide