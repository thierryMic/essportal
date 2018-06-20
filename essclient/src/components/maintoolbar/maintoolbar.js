import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';


import Iconer from '../../utils/Iconer'



const styles = theme => ({
})


class MainToolbar extends React.Component {

    render () {
        return (
                <Toolbar disableGutters>
                    <Button mini color='secondary'>
                        <Iconer name='save' color='primary'/>
                    </Button>
                    <Button mini color='secondary'>
                        <Iconer name='undo' color='primary'/>
                    </Button>
                </Toolbar>
        )
    }
}

export default MainToolbar
