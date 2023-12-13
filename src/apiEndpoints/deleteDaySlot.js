import { getIDToken } from "../auth"

const DELETE_DAY_SLOT_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors'

export const deleteDaySlot = (doctorId,id) => {
    const token = getIDToken()
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${DELETE_DAY_SLOT_DATA_URL}/${doctorId}/${id}/.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default deleteDaySlot