import { removeIDToken, removeRefreshToken } from './token'

export const logOut = () => {
  removeIDToken()
  removeRefreshToken()
  return Promise.resolve()
}

export default logOut
