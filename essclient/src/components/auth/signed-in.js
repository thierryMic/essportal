import React from 'react'
import PropTypes from 'prop-types'

import { setToken, checkSecret, extractInfoFromHash } from '../../auth/auth'

export default class SignedIn extends React.Component {

   componentDidMount () {
    const {id_token, access_token, expires_in, state} = extractInfoFromHash()
    setToken(id_token, access_token, expires_in)
    localStorage.removeItem(`com.auth0.auth.${state}`)

    window.history.pushState(null, null, '/')
  }

  render () {
    return null
  }

}
