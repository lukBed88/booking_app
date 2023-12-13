import { getIDToken } from "../auth"

const DELETE_DOCTORS_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors'

export const deleteDoctorsData = (doctorId,id,patient) => {
    const token = getIDToken()
    const options = {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }
    }
    
    return fetch(`${DELETE_DOCTORS_DATA_URL}/${doctorId}/${id}/visits/valueSlot/${patient}.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default deleteDoctorsData