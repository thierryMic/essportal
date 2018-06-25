import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import { observer, inject } from 'mobx-react'
import { Typography } from '@material-ui/core';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
    flexColumn:{
        display: 'flex',
        flexDirection: 'column',
    },
})


const ShiftComponent = inject("store")(observer(
class ShiftComponent extends React.Component {

    handleChange = (e, emp) => {
        // emp[e.target.name]= e.target.value
    }

    render () {

        const { paper, container, flexColumn } = this.props.classes
        const { employee } = this.props.store.timeStore

        return (
            <Paper className={paper}>
            <form className={classNames(container, flexColumn)} noValidate autoComplete="off">
                <Typography variant='title'>Record a shift</Typography>
                    <TextField id="date" label="Date" type="date" InputLabelProps={{shrink: true}}/>
                    <TextField id="start" label="Start" type="time" defaultValue="00:00" InputLabelProps={{shrink: true}}/>
                    <TextField id="end" label="End" type="time" defaultValue="00:00" InputLabelProps={{shrink: true}}/>
            </form>
            </Paper>
        )
    }
}))

ShiftComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}


export default withStyles(styles)(ShiftComponent)