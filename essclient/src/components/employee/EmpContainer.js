//react
import React from 'react'

//material ui
import Grid from '@material-ui/core/Grid'

//components
import MainToolbar from '../common/maintoolbar'
import EmpDetailsComponent from './EmpDetailsComponent'
import EmpBankComponent from './EmpBankComponent'

/**
* @description renders the main grid and components that make up the employee menu
*/
const EmpContainer = () => {
    return (
        <Grid container spacing={8}  >
            <Grid item xs={12} ><MainToolbar/></Grid>
            <Grid item xs={12} sm={6} lg={4}><EmpDetailsComponent /></Grid>
            <Grid item xs={12} sm={6} lg={4}><EmpBankComponent /></Grid>
        </Grid>
    )
}

export default EmpContainer

