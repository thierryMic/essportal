//react and mobx
import React from 'react'
import { observer, inject } from 'mobx-react'

//material-ui
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
    root:{
        display:'flex',
        width: '10em',
        margin: 0,
    },
})


/**
* @description renders a combo box with a list of employees
* @description this is usually a child component of a RosterDayComponent
*/
const RosterItemComponent= inject('store')(observer((props) => {
    const { item, handleChange } = props
    const { employees } = props.store.employeeStore

    return (
        <FormControl className={props.classes.root}>
            <Select value={item.employee.id} onChange={handleChange}>
                {employees.map ( (e) => (<MenuItem key={e.id} value={e.id}>{e.firstName}</MenuItem>))}
            </Select>
        </FormControl>
    )
}))

export default withStyles(styles)(RosterItemComponent)