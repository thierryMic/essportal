//react and mobx
import React from 'react';
import { observer, inject } from 'mobx-react'

//material-ui
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

//components
import MainToolbar from '../common/maintoolbar'
import RosterComponent from './RosterComponent'

const styles = () => ({
    root: {
        width: '100%',
    },
    rost: {
        marginBottom: '.5em',
        padding: '.5em',
        width: '100%',
        display: 'flex',
    },
    datePicker: {
        margin: '0 1em'
    },
  })

/**
* @description renders a RosterContainer component
*/
const RosterContainer= inject('store')(observer((props) => {
    const {root, rost, datePicker} = props.classes
    const { roster } = props.store.rosterStore

    return (
        <div className={root}>
            {/* toolbar */}
            <MainToolbar new={(e) => props.store.rosterStore.createRoster()} />

            {/* Title bar */}
            <Paper className={rost}>
                <Typography variant='title'>Roster for the week starting:</Typography>
                <TextField
                    id="date"
                    type="date"
                    margin='dense'
                    className={datePicker}
                    InputLabelProps={{shrink: true,}}
                    value={roster.startDate}
                    onChange={(e) => roster.changeStartDate(e.target.value)}
                />
            </Paper>

            {/* Rosters expansion panels each panel represent a day or RosterItem*/}
            <Grid container spacing={24}>
                <RosterComponent roster={roster}/>
            </Grid>
        </div>
    )
}))

export default withStyles(styles)(RosterContainer)
