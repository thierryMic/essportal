import React from 'react'
import SignIn from '../components/auth/signin'

const securePageHoc = Page => class SecurePage extends React.Component {

  render () {
    return !!localStorage.getItem("loggeduser") ? <Page /> : <SignIn />
  }

}

export default Page => securePageHoc(Page)