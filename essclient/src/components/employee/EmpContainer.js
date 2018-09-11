//react
import React from 'react'
import { observer, inject } from 'mobx-react'

//auth
import securePage from "../../auth/securePage"

//material ui
import Grid from '@material-ui/core/Grid'

//components
import MainToolbar from '../common/maintoolbar'
import EmpDetailsComponent from './EmpDetailsComponent'
import EmpBankComponent from './EmpBankComponent'
import EmpSuperComponent from './EmpSuperComponent'
import EmpKinComponent from './EmpKinComponent';

/**
* @description renders the main grid and components that make up the employee menu
*/
const EmpContainer =  inject('store')(observer((props) => {
    const { employeeStore } = props.store
    return (
        <Grid container spacing={8}  >
            <Grid item xs={12} >
                <MainToolbar
                    // newX={(e) => employeeStore.newE()}
                    // save={(e) => employeeStore.save()}
                    // prev={(e) => employeeStore.prev()}
                    // next={(e) => employeeStore.next()}
                    submit= {(e) => employeeStore.save()}
                />
            </Grid>

            <Grid item xs={12} sm={6} lg={4}><EmpDetailsComponent /></Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <EmpKinComponent />
                <EmpSuperComponent />
            </Grid>
            <Grid item xs={12} sm={6} lg={4}><EmpBankComponent /></Grid>
        </Grid>
    )
}))

export default securePage(EmpContainer)
