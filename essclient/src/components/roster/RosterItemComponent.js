//react and mobx
import React from 'react'
import { observer, inject } from 'mobx-react'

//material-ui
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'

//react-slider
import {Range}  from 'rc-slider'
import "rc-slider/assets/index.css"

const styles = () => ({
    root:{
        display:'flex',
        width: '10em',
        margin: 0,
    },
    button: {
        height: '2em',
        fontSize: '1em',
        width: '1em',
        marginRight: '1em'
    },
    slider: {
        height:'2.5em',
        padding:'0.25em 1.5em',
        display:'flex',
        width:'100%'
    }
})

// list of visible tickers on the slider
const marks = {
    0 :'0:00', 1 :'1:00', 2 :'2:00', 3 :'3:00', 4 :'4:00', 5 :'5:00',
    6 :'6:00', 7 :'7:00', 8 :'8:00', 9 :'9:00', 10 :'10:00', 11 :'11:00',
    12 :'12:00', 13 :'13:00', 14 :'14:00', 15 :'15:00', 16 :'16:00', 17 :'17:00',
    18 :'18:00', 19 :'19:00', 20 :'20:00', 21 :'21:00', 22 :'22:00', 23 :'23:00', 23.99: '23:59'
}


/**
* @description renders a RosterItem
* @description this is usually a child component of a RosterDayComponent
*/
const RosterItemComponent= inject('store')(observer((props) => {
    const { root, button, slider} = props.classes
    const { item } = props
    const { employees } = props.store.employeeStore
    const { getEmployee } = props.store.employeeStore

    return (
        <Paper className={slider}>
            {/* Dropdown menu to select an employee for the roster item */}
            <FormControl className={root}>
                <Select value={item.employee.id} onChange={(e)=>item.setEmployee(getEmployee(e.target.value))}>
                    {employees.map ( (e) => (<MenuItem key={e.id} value={e.id}>{e.firstName}</MenuItem>))}
                </Select>
            </FormControl>

            {/* button to delete current roster item */}
            <IconButton onClick={() => item.delete()} className={button}>x</IconButton>

            {/* slider */}
            <Range min={0} max={24} defaultValue={[0,1]} step={0.25} marks={marks} allowCross={false} />
        </Paper>
    )
}))

export default withStyles(styles)(RosterItemComponent)