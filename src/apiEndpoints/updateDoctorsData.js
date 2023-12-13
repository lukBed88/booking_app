import { getIDToken } from "../auth"

const UPDATE_DOCTORS_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors'

export const updateDoctorsData = (doctorId,visitsId,patient) => {
    const token = getIDToken()
    console.log(token)

    const options = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    }

    return fetch(`${UPDATE_DOCTORS_DATA_URL}/${doctorId}/${visitsId}/visits/valueSlot.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
    // .then((data) => {
    //     console.log(data)
    // })
}

export default updateDoctorsData