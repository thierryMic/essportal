import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import MainToolbar from '../common/maintoolbar'
import RosterComponent from './RosterComponent'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { observer, inject } from 'mobx-react'


const styles = () => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
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

const RosterContainer = inject("store")(observer(
class RosterContainer extends React.Component {

    newRoster = (e) => {
        this.props.store.rosterStore.createRoster
    }

    handleChange = (e) => {
        this.props.store.rosterStore.roster.changeStartDate(e.target.value)
    }

    render () {
        const {root, rost, datePicker} = this.props.classes
        const { roster} = this.props.store.rosterStore

        return (
            <div className={root}>
                <MainToolbar new={this.newRoster} />
                <Paper className={rost}>
                    <Typography variant='title'>Roster for the week starting:</Typography>
                    <TextField
                        id="date"
                        type="date"
                        margin='dense'
                        className={datePicker}
                        InputLabelProps={{shrink: true,}}
                        value={roster.startDate}
                        onChange={(e) => this.handleChange(e)}
                    />
                </Paper>
                <Grid container spacing={24}>
                    <RosterComponent />
                </Grid>
            </div>
        )
    }
}))

export default withStyles(styles)(RosterContainer)
