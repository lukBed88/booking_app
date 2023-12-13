/* eslint-disable prefer-promise-reject-errors */
import { makeRequest } from './makeRequest'
import { getIDToken } from './token'

export const makeAuthorizedRequest = (url, options) => {
  const token = getIDToken()
  if (!token) return Promise.reject(' No token found')
  const urlWithToken = `${url}?auth=${token}`
  return makeRequest(urlWithToken, options)
}

export default makeAuthorizedRequest
