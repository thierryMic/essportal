import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import MainToolbar from '../maintoolbar/maintoolbar'


const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
})


// const EmpContainer = inject("employeeStore")(observer(
class TimeSheetContainer extends React.Component {

    render () {
        const { root} = this.props.classes

        return (
            <div className={root}>
                <MainToolbar/>

                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6} lg={4}>
                        {/* <EmpDetailsComponent /> */}
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4}>
                        {/* <EmpBankComponent /> */}
                    </Grid>
                </Grid>
            </div>
        )
    }
// }))
}


// EmpContainer.propTypes = {
//   classes: PropTypes.object.isRequired,
// }


export default withStyles(styles)(TimeSheetContainer)

