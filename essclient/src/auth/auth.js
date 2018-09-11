import jwtDecode from 'jwt-decode'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
    const {id_token, access_token, expires_in, state} = getQueryParams()
    return {id_token, access_token, expires_in, state }
}

export const setToken = (id_token, access_token, expires_in) => {
    let expiresAt = JSON.stringify((expires_in * 1000) + new Date().getTime())
    localStorage.setItem('access_token', access_token)
    localStorage.setItem('id_token', id_token)
    localStorage.setItem('expires_at', expiresAt);

    localStorage.setItem('loggeduser', getUser(id_token));
}

export const unsetToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('loggeduser')
    // window.localStorage.setItem('logout', Date.now())
}

export const getUser = id_token => {
    const decoded = jwtDecode(id_token)
    return decoded.email
}