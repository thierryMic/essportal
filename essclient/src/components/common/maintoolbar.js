// react
import React from 'react'
import PropTypes from 'prop-types'

//material ui
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

//components
import Iconer from '../../utils/Iconer'

/**
* @description renders MainToolbar component
* @description the toolbar has 3 icons/actions that are common to most parts of the application
* @description new, save and delete
*/
const MainToolbar = (props) => {
    return (
        <Toolbar disableGutters>
            <Button size='small' onClick={props.new}> <Iconer name='plus' color='primary'/></Button>
            <Button size='small' ><Iconer name='save' color='primary'/></Button>
            <Button size='small' ><Iconer name='clear' color='primary'/></Button>
        </Toolbar>
    )
}

MainToolbar.propTypes = {
    new: PropTypes.func,
    save: PropTypes.func,
    delete: PropTypes.func,
}

export default MainToolbar
