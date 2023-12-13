import { getIDToken } from "../auth"

const POST_PATIENT_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/patients.json'
export const postPatientData = (patient) => {
    const token = getIDToken()
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({patient})
    }

    return fetch(`${POST_PATIENT_DATA_URL}?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
    .then((data) => {
        console.log(data)
    })
}

export default postPatientData