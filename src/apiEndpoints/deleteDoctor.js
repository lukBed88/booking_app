import { getIDToken } from "../auth"

const DELETE_DOCTOR_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors'

export const deleteDoctor = (doctorId) => {
    const token = getIDToken()
    const options = {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    return fetch(`${DELETE_DOCTOR_DATA_URL}/${doctorId}/.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default deleteDoctor