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
    const { newx, save, clear, prev, next, search, submit } = props
    return (
        <Toolbar disableGutters>
            {newx && <Button size='small' onClick={newx}> <Iconer name='plus' color='primary'/></Button>}
            {save && <Button size='small' onClick={save}><Iconer name='save' color='primary'/></Button>}
            {clear && <Button size='small' ><Iconer name='clear' color='primary'/></Button>}
            {prev && <Button size='small' onClick={prev}><Iconer name='prev' color='primary'/></Button>}
            {next && <Button size='small' onClick={next}><Iconer name='next' color='primary'/></Button>}
            {search && <Button size='small' ><Iconer name='search' color='primary'/></Button>}
            {submit && <Button variant="contained" color="secondary" >Submit</Button>}
        </Toolbar>
    )
}

MainToolbar.propTypes = {
    new: PropTypes.func,
    save: PropTypes.func,
    delete: PropTypes.func,
}

export default MainToolbar
