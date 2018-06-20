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


const EmpBankComponent = inject("employeeStore")(observer(
class EmpBankComponent extends React.Component {

    handleChange = (e, emp) => {
        emp[e.target.name]= e.target.value
    }

    render () {

        const { paper, container, flexColumn } = this.props.classes
        const { employee } = this.props.employeeStore

        return (
            <Paper className={paper}>
            <form className={classNames(container, flexColumn)} noValidate autoComplete="off">
                <Typography variant='title'>Bank details </Typography>

                <TextField name="bsb" label="BSB" value={employee.bsb}
                            onChange={(e) => this.handleChange(e, employee)}
                />

                <TextField name="accountNo" label="Account no" value={employee.accountNo}
                            onChange={(e) => this.handleChange(e, employee)}
                />

            </form>
            </Paper>
        )
    }
}))

EmpBankComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}


export default withStyles(styles)(EmpBankComponent)