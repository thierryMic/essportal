import React from 'react';
import RosterDayComponent from './RosterDayComponent'
import Grid from '@material-ui/core/Grid'
import { observer, inject } from 'mobx-react'


const RosterComponent = inject('store')(observer((props) => {
    const { roster } = props.store.rosterStore

    return (
        <Grid item xs={12}>
            {roster.days.map (d => (
                <RosterDayComponent key={d.day} rosterDay={d}/>
            ))}
        </Grid>
    )
    }
))

export default RosterComponent
