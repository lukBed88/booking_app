/* eslint-disable no-return-assign */

const ID_TOKEN_KEY = 'idToken'
const REFRESH_TOKEN_KEY = 'refreshToken'

export const getIDToken = () => {
  return localStorage.getItem(ID_TOKEN_KEY)
}

export const setIDToken = (newToken) => {
  localStorage.setItem(ID_TOKEN_KEY, newToken)
}
export const removeIDToken = () => {
  localStorage.removeItem(ID_TOKEN_KEY)
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN_KEY)
}

export const setRefreshToken = (newToken) => {
  return localStorage.setItem(REFRESH_TOKEN_KEY, newToken)
}

export const removeRefreshToken = () => {
  return localStorage.removeItem(REFRESH_TOKEN_KEY)
}
