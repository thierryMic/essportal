import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles'

import Iconer from '../../utils/Iconer'



const styles = theme => ({

})


const MainToolbar = (props) => {
        const {button} = props.classes
        return (
                <Toolbar disableGutters>
                    <Button size='small' className={button} onClick={props.new}>
                        <Iconer name='plus' color='primary'/>
                    </Button>
                    <Button size='small' className={button} >
                        <Iconer name='save' color='primary'/>
                    </Button>
                    <Button size='small' className={button} >
                        <Iconer name='clear' color='primary'/>
                    </Button>
                </Toolbar>
        )
    }

export default withStyles(styles)(MainToolbar)
