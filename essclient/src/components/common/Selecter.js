import React from 'react';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl';



export const Selecter = (props) => {
    const {xid, values, handleChange, val, xClass} = props

    return (
        <FormControl className={xClass}>
            <InputLabel htmlFor={xid}>Lease type</InputLabel>
            <Select name={xid} value={val} onChange={handleChange} >
                {values.map ( (v) => (<MenuItem key={v} value={v}>{v}</MenuItem>))}
            </Select>
        </FormControl>
        )
    }