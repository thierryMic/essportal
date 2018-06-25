import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Iconer from '../../utils/Iconer'
import RosterItemComponent from './RosterItemComponent'
import { observer, inject } from 'mobx-react'
import { ExpansionPanelDetails } from '@material-ui/core';

const styles = theme => ({

});

const RosterDayComponent = inject("store")(observer(
class RosterDayComponent extends React.Component {
    state = {
        expanded: null,
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        })
    }

    addItem = (rosterDay) => {
        // debugger
        rosterDay.addItem()
    }

  render() {
    const { classes, rosterDay } = this.props;
    const { expanded } = this.state;

    return (
        <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
            <ExpansionPanelSummary expandIcon={<Iconer name='down' color='primary'/>}>
                <Typography variant='subheading'>{rosterDay.day.format('dddd, MMMM Do YYYY')}</Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>
                <Button onClick={() => rosterDay.newItem()}>
                    <Iconer name='plus' color='primary'/>
                </Button>

                {rosterDay.items.map( (i) => (
                    <RosterItemComponent key={i.date} item={i} />
                ))}
            </ExpansionPanelDetails>

        </ExpansionPanel>
    );
  }
}))

RosterDayComponent.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RosterDayComponent);