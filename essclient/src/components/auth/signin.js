import React from 'react';
import defaultPage from '../../auth/defaultPage'
import { show } from '../../auth/lock'

const CONTAINER_ID = 'put-lock-here'


class SignIn extends React.Component {
  componentDidMount () {
    show(CONTAINER_ID)
  }
  render () {
    return <div id={CONTAINER_ID} />
  }
}

export default defaultPage(SignIn)
