import { getIDToken } from "../auth"

const POST_DOCTOR_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors.json'
export const postDoctorData = (doctor) => {
    const token = getIDToken()
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(doctor)
    }

    return fetch(`${POST_DOCTOR_DATA_URL}?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        console.log(data)
    })
}

export default postDoctorData