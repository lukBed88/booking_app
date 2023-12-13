export const makeRequest = (url, options) => {
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) throw response
      return response.json()
    })
    .catch((err) => {
      throw err.json()
    })
}

export default makeRequest
