import React from 'react';
import { observer, inject } from 'mobx-react'

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ListItem } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import Iconer from '../../utils/Iconer'

const styles = theme => ({
    listItem:{
        padding: 0,
    }
  })

const SidebarItem = inject('store')(observer((props) => {
    const { iconName, text, classes, link } = props
    const { uiStore } = props.store

    return (
        <List disablePadding>
            <ListItem button divider className={classes.listItem} onClick={()=> uiStore.setView(link)}>
                <IconButton>
                    <Iconer name={iconName} color='primary'/>
                </IconButton>
                <Typography>{text}</Typography>
            </ListItem>
        </List>
    )
}))



export default withStyles(styles)(SidebarItem)