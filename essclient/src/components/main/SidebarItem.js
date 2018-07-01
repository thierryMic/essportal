import React from 'react'

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Iconer from '../../utils/Iconer'

const styles = () => ({
    listItem:{
        padding: 0,
    }
  })

const SidebarItem = props => {
    const { iconName, text, classes, handler } = props

    return (
        <List disablePadding>
            <ListItem button divider className={classes.listItem} onClick={handler}>
                <IconButton>
                    <Iconer name={iconName} color='primary'/>
                </IconButton>
                <Typography>{text}</Typography>
            </ListItem>
        </List>
    )
}



export default withStyles(styles)(SidebarItem)