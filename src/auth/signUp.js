import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from "./const"

const SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + FIREBASE_APP_KEY
const signUp = (email, password) => {
  return makeRequest(SIGN_UP_URL,
    {
      method: 'POST',
      body: JSON.stringify(
        {
          email,
          password,
          returnSecureToken: true
        })
    }
  )
    .then((data) => data)
}

export default signUp
