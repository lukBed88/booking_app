import { getIDToken } from "../auth"

const GET_DOCTORS_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors'

export const postDoctorsData = (doctorId,visits) => {
    const token = getIDToken()
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({visits})
    }

    return fetch(`${GET_DOCTORS_DATA_URL}/${doctorId}.json?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
    // .then((data) => {
    //     console.log(data)
    // })
}

export default postDoctorsData