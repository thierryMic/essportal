// react and mobx
import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'

//material-ui
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

//components
import Iconer from '../../utils/Iconer'
import RosterItemComponent from './RosterItemComponent'


/**
* Class representing a RosterDay
* @extends Component
*/
const RosterDayComponent = inject("store")(observer(
class RosterDayComponent extends React.Component {
    state = {
        expanded: null,
    }

    /**
    * @description open or close expansion panel
    */
    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        })
    }

    /**
    * @description renders a RosterDay component
    */
    render() {
        const { rosterDay } = this.props
        const { expanded } = this.state

        return (
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>

                {/* Title for roster time - date of the roster item */}
                <ExpansionPanelSummary expandIcon={<Iconer name='down' color='primary'/>}>
                    <Typography variant='subheading'>{rosterDay.day.format('dddd, MMMM Do YYYY')}</Typography>
                </ExpansionPanelSummary>

                {/* Button to add roster item */}
                <Button onClick={() => rosterDay.newItem()}><Iconer name='plus' color='primary'/></Button>

                {/* List of roster items for the current day */}
                {rosterDay.items.map( (i) => (
                    <RosterItemComponent key={i.id} item={i} />
                ))}

            </ExpansionPanel>
        )
    }
}))

RosterDayComponent.propTypes = {
    rosterDay: PropTypes.object.isRequired,
}

export default RosterDayComponent