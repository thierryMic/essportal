//react and mobx
import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

//material-ui
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

const styles = theme => ({
    form:{
        ...theme.form
    },
})

const handleChange = (e, emp) => {
    emp[e.target.name]= e.target.value
}

/**
* @description renders a form with a number of required fields for each employee
*/
const EmpDetailsComponent = inject('store')(observer((props) => {
    const { form } = props.classes
    const { employee } = props.store.employeeStore

    return (
        <Paper className={form}>
            <Typography variant='title'> Contact info </Typography>

            <TextField name="empId" label="Employee id" value={employee.id} />

            <TextField name="firstName" label="First Name" value={employee.firstName}
                       onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="lastName" label="Last Name" value={employee.lastName}
                       onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="address" label="Address" value={employee.address}
                       onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="email" label="Email address" value={employee.email}
                       onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="phone" label="Phone number" value={employee.phone}
                       onChange={(e) => handleChange(e, employee)}
            />
        </Paper>
    )
}))


EmpDetailsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}


export default withStyles(styles)(EmpDetailsComponent)