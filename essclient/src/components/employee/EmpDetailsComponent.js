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


const EmpDetailsComponent = inject("store")(observer(
class EmpDetailsComponent extends React.Component {

    handleChange = (e, emp) => {
        emp[e.target.name]= e.target.value
    }

    render () {

        const { paper, container, flexColumn } = this.props.classes
        const { employee } = this.props.store.employeeStore

        return (
            <Paper className={paper}>
            <form className={classNames(container, flexColumn)} noValidate autoComplete="off">
                <Typography variant='title'> Contact info </Typography>

                <TextField name="empId" label="Employee id" value={employee.id} />

                <TextField name="firstName" label="First Name" value={employee.firstName}
                            onChange={(e) => this.handleChange(e, employee)}
                />

                <TextField name="lastName" label="Last Name" value={employee.lastName}
                            onChange={(e) => this.handleChange(e, employee)}
                />

                <TextField name="address" label="Address" value={employee.address}
                            onChange={(e) => this.handleChange(e, employee)}
                />

                <TextField name="email" label="Email address" value={employee.email}
                            onChange={(e) => this.handleChange(e, employee)}
                />

                <TextField name="phone" label="Phone number" value={employee.phone}
                            onChange={(e) => this.handleChange(e, employee)}
                />
            </form>
            </Paper>
        )
    }
}))



EmpDetailsComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  employee: PropTypes.object
}


export default withStyles(styles)(EmpDetailsComponent)