import React from "react"

import { unsetToken } from "../../auth/auth"
import { logout } from "../../auth/lock"

export default class SignOut extends React.Component {
    componentDidMount() {
        unsetToken()
        logout()
    }

    render() {
        return null
    }
}
