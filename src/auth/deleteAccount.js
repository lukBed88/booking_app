/* eslint-disable prefer-promise-reject-errors */
import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from './const'
import { getIDToken } from './token'

const DELETE_ACCOUNT = 'https://identitytoolkit.googleapis.com/v1/accounts:delete?key=' + FIREBASE_APP_KEY

export const deleteAccount = () => {
  const token = getIDToken()
  if (!token) {
    return Promise.reject('no token')
  }
  return makeRequest(
    DELETE_ACCOUNT,
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: token
      })
    }
  )
}

export default deleteAccount
