/* eslint-disable prefer-promise-reject-errors */
import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from './const'
import { getIDToken } from './token'

const GET_USER_DATA_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=' + FIREBASE_APP_KEY
export const getUserData = () => {
  const token = getIDToken()

  if (!token) {
    return Promise.reject('no token')
  }

  return makeRequest(
    GET_USER_DATA_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: token
      })
    }
  )
}

export default getUserData
