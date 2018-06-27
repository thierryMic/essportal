// react
import React from 'react'
import PropTypes from 'prop-types'

//material ui
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'


/**
* @description renders Material Ui Select component
* @description the Selecter is a helper component to reduce boilerplate throghout the app
*/
const Selecter = (props) => {
    const {xid, xClass, title, values, value, handleChange} = props
    return (
        <FormControl className={xClass}>
            <InputLabel htmlFor={xid}>{title}</InputLabel>
            <Select name={xid} value={value} onChange={handleChange} >
                {values.map ( (v) => (<MenuItem key={v} value={v}>{v}</MenuItem>))}
            </Select>
        </FormControl>
    )
}

MainToolbar.propTypes = {
    xid: PropTypes.string.isRequired, //id of select component
    xClass: PropTypes.object, // the css/jss class to be applied to this select component
    title: PropTypes.string, // the description for the label
    values: PropTypes.array.isRequired, //an array containing the options that will be available in the dropdown
    value: PropTypes.any.isRequired, //generally an observable that whose value will change with the user selection
    handleChange: PropTypes.func.isRequired, // a function to be called when the user selection has changed
}

export default Selecter