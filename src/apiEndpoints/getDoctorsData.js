import { getIDToken } from "../auth"

const GET_DOCTORS_DATA_URL = 'https://medic-app-6746d-default-rtdb.firebaseio.com/doctors.json'

export const getDoctorsData = () => {
    
    const token = getIDToken()
    const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
    }

    return fetch(`${GET_DOCTORS_DATA_URL}?auth=${token}`,options)
    .then((resp) => {
        return resp.json()
    })
}

export default getDoctorsData