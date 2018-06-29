import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Iconer from '../../utils/Iconer'
import { Link } from 'react-router-dom'

const styles = theme => ({
    listItem:{
        padding: 0,
    }
  })

const SidebarItem = (props) => {
    const {iconName, text, classes } = props
    return (
        <Link to={`/${props.link}`}>
            <List disablePadding>
                <ListItem button divider className={classes.listItem}>
                    <IconButton>
                        <Iconer name={iconName} color='primary'/>
                    </IconButton>
                    <Typography>{text}</Typography>
                </ListItem>
            </List>
        </Link>
    )
}



export default withStyles(styles)(SidebarItem)