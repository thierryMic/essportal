import React from 'react';
import { observer, inject } from 'mobx-react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Iconer from '../../utils/Iconer'
import SidebarItem from './SidebarItem'
import EmpContainer from '../employee/EmpContainer'
import TimeSheetContainer from '../timesheet/TimeSheetContainer'
import RosterContainer from '../roster/RosterContainer'


const drawerWidthOpen = '10em'
const drawerWidthClosed = '3.1em'

const styles = (theme, props) => ({
    root: {
        flexGrow: 1,
        height: 2000,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },

    menuButton: {
      marginRight: 8,
    },

    drawerPaper: {
        whiteSpace: 'nowrap',
        width: drawerWidthOpen,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: drawerWidthClosed,
    },

    toolbar: {
        ...theme.mixins.toolbar,
    },

    content: {
        display: 'flex',
        flexWrap: 'wrap',
        position: 'absolute',
        // flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        transition: theme.transitions.create('left'),
        padding: '3.5em 1em',
        width:'100%',
        [theme.breakpoints.up('sm')]: {
            left: drawerWidthClosed,
            width: 'calc(100% - ' + drawerWidthClosed + ')',
          },
    },

    contentOpen : {
        width: 'calc(100% - ' + drawerWidthOpen + ')',
        left: drawerWidthOpen,
    }

});

const App = inject("store")(observer(
class App extends React.Component {

    componentDidMount() {
        this.props.store.uiStore.setView(window.location.pathname, true)
        window.onpopstate = () => {
            this.props.store.uiStore.setView(window.location.pathname, true)
        }
    }


    state = {open: false};

    handleDrawerOpen = () => {
        this.setState({open: true,});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    activeView = () => {
        switch (this.props.store.uiStore.activeViewId) {
            case '/': return <EmpContainer />
            case '/employee': return <EmpContainer />
            case '/roster': return <RosterContainer />
        }
    }

    render() {
        const { classes } = this.props
        const { uiStore } = this.props.store

        return (
        <div className={classes.root}>
            {/* Title bar */}
            <AppBar className={classNames(classes.appBar)}>
                <Toolbar disableGutters>
                    <IconButton
                    color="secondary"
                    onClick={this.state.open ? this.handleDrawerClose : this.handleDrawerOpen}
                    className={classNames(classes.menuButton)}
                    >
                        <Iconer name='menu' color='secondary' />
                    </IconButton>
                    <Typography variant="title" color="inherit" noWrap>Employee portal</Typography>
            </Toolbar>
            </AppBar>

            {/* Sidebar */}
            <Drawer
              variant={window.matchMedia("(min-width: 600px)").matches ? 'permanent' : 'persistent'}
              classes={{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}
              open={this.state.open}
            >
                <div className={classes.toolbar}/>
                <SidebarItem iconName='lease' text='Employee details' handler={()=>uiStore.showEmployee()} />
                {/* // <SidebarItem iconName='lessor' text='Time sheet' link='timesheet'/> */}
                <SidebarItem iconName='report' text='Reports' handler={()=>uiStore.showRoster()} />
            </Drawer>

            {/* Content pane */}
            <main className={classNames(classes.content, this.state.open && classes.contentOpen)}>
                {this.activeView()}
             </main>
        </div>
        );
    }
}))


export default withStyles(styles, { withTheme: true })(App);