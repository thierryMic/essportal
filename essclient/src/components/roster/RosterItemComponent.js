import React from 'react';
import {Range}  from 'rc-slider';
import Paper from '@material-ui/core/Paper'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import { withStyles } from '@material-ui/core/styles'
import { observer, inject } from 'mobx-react'
import IconButton from '@material-ui/core/IconButton';
import Iconer from '../../utils/Iconer'

import "rc-slider/assets/index.css";
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
    root:{
        width: '10em',
    },
    button: {
        height: '1em',
        fontSize: '1.1em',
        width: '1em',
        marginRight: '1em'
    },
})

const marks = {
    0 :'0:00', 1 :'1:00', 2 :'2:00', 3 :'3:00', 4 :'4:00', 5 :'5:00',
    6 :'6:00', 7 :'7:00', 8 :'8:00', 9 :'9:00', 10 :'10:00', 11 :'11:00',
    12 :'12:00', 13 :'13:00', 14 :'14:00', 15 :'15:00', 16 :'16:00', 17 :'17:00',
    18 :'18:00', 19 :'19:00', 20 :'20:00', 21 :'21:00', 22 :'22:00', 23 :'23:00', 23.99: '23:59'
};

const values = ['john', 'julie', 'thiery']

const handleChange = (e) => {
    e.target.value = e.target.value
}

const remove = e => {
    console.log(e.value)
}

const RosterItemComponent= inject('store')(observer((props) => {
    const { root, button,} = props.classes
    const { item } = props

    return (
        <Paper style={{height:'3em', padding:'.5em 1em', display:'flex', width:'100%'}}>
            <FormControl className={root}>
                <Select name={'x'} value={item.employeeId} onChange={handleChange} >
                    {values.map ( (v) => (<MenuItem key={v} value={v}>{v}</MenuItem>))}
                </Select>
            </FormControl>

            <IconButton onClick={() => item.delete()} className={button}>x</IconButton>
            <Range min={0} max={24} defaultValue={[0,1]} step={0.25} marks={marks} allowCross={false} />
        </Paper>
        )
    }))

    export default withStyles(styles)(RosterItemComponent)