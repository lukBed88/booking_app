/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from './const'
import { getRefreshToken, setIDToken, setRefreshToken } from './token'

const REFRESH_TOKEN_URL = 'https://securetoken.googleapis.com/v1/token?key=' + FIREBASE_APP_KEY

export const refreshTokens = () => {
  const refreshToken = getRefreshToken()

  if (!refreshToken) return Promise.reject('no refresh token fount')

  return makeRequest(
    REFRESH_TOKEN_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      })
    }
  )
    .then((data) => {
      setIDToken(data.id_token)
      setRefreshToken(data.refresh_token)
      return data
    })
}
