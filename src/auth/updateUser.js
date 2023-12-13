/* eslint-disable prefer-promise-reject-errors */
import makeRequest from '../fetchDataFirebase'
import { FIREBASE_APP_KEY } from './const'
import { getIDToken } from './token'

const UPDATE_USER_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=' + FIREBASE_APP_KEY
export const updateUser = (displayName, photoUrl) => {
  const token = getIDToken()

  if (!token) {
    return Promise.reject('no token')
  }

  const deleteAttribute = (
    displayName && photoUrl ?
      undefined
      :
        [
          ...(!displayName ? ['DISPLAY_NAME'] : []),
          ...(!photoUrl ? ['PHOTO_URL'] : [])
        ]
  )

  return makeRequest(
    UPDATE_USER_URL,
    {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        ...(!displayName ? {} : { displayName }),
        ...(!photoUrl ? {} : { photoUrl }),
        deleteAttribute,
        returnSecureToken: true
      })
    }
  )
}

export default updateUser
