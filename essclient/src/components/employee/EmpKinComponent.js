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
    },
})

const handleChange = (e, emp) => {
        emp[e.target.name]= e.target.value
    }

/**
* @description renders a form with bank details fields
*/
const EmpKinComponent = inject('store')(observer((props) => {
    const { form } = props.classes
    const { employee } = props.store.employeeStore

    return (
        <Paper className={form}>
            <Typography variant='title'>Next of kin</Typography>

            <TextField name="kinName" label="Name" value={employee.kinName}
                        onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="kinRelation" label="Relation" value={employee.kinRelation}
                        onChange={(e) => handleChange(e, employee)}
            />

            <TextField name="kinPhone" label="Phone number" value={employee.kinPhone}
                        onChange={(e) => handleChange(e, employee)}
            />
        </Paper>
    )
}))

EmpKinComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}

export default withStyles(styles)(EmpKinComponent)