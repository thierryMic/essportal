//react
import React from 'react'
import PropTypes from 'prop-types'

//mobx
import { observer, inject } from 'mobx-react'

//material-ui
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
    form:{
        ...theme.form,
        marginTop: '.5em',
    },
})

const handleChange = (e, emp) => {
        emp[e.target.name]= e.target.value
    }

/**
* @description renders a form with bank details fields
*/
const EmpSuperComponent = inject('store')(observer((props) => {
    const { form } = props.classes
    const { employee } = props.store.employeeStore

    return (
        <Paper className={form}>
            <Typography variant='title'>Superannuation details </Typography>

            <TextField name="superFund" label="Superannuation fund" value={employee.superFund}
                        onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="superAbn" label="Fund ABN" value={employee.superAbn}
                        onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="superNo" label="Member number" value={employee.superNo}
                        onChange={(e) => handleChange(e, employee)}
            />
        </Paper>
    )
}))

EmpSuperComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}

export default withStyles(styles)(EmpSuperComponent)