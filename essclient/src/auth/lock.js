import { setSecret } from './auth'

import uuid from 'uuid'

const getLock = (options) => {
  const config = require('./config.json')
  const Auth0Lock = require('auth0-lock').default
  return new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_CLIENT_DOMAIN, options)
}

const getBaseUrl = () => `${window.location.protocol}//${window.location.host}`

const getOptions = (container) => {
  const secret = uuid.v4()
  // setSecret(secret)
  return {
    closable: false,
    auth: {
      responseType: 'token id_token',
      redirectUrl: `${getBaseUrl()}/auth/signed-in`,
      params: {
        scope: 'openid profile email',
        state: secret,
        audience: "https://essportal.com/api"
      },
    theme: {
        logo: "../static/FF-icon-black-web.jpg",
        primaryColor: "#000000"
    },
    languageDictionary: {
        emailInputPlaceholder: "email address",
        title: "Fresh Trading Co",
        passwordInputPlaceholder: "password",
        loginLabel: "Sign In"
    }
    }
  }
}

export const show = (container) => getLock(getOptions(container)).show()
export const logout = () => getLock().logout({ returnTo: getBaseUrl() })
