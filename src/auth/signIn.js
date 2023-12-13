import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from './const'
import { setIDToken, setRefreshToken } from './token'

const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + FIREBASE_APP_KEY
const signIn = (email, password) => {
  return makeRequest(SIGN_IN_URL,
    {
      method: 'POST',
      body: JSON.stringify({ email, password, returnSecureToken: true })
    }
  )
    .then((data => {
      setIDToken(data.idToken)
      setRefreshToken(data.refreshToken)
      console.log('LOGOWANIE DATA',data)
      return data
    }))
}

export default signIn
