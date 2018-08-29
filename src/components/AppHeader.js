import React from 'react';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import TimeDate from '../components/TimeDate';
function AppHeader({icon,name}) {

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton className="menuButton" color="inherit" aria-label="Menu">
          <Icon>{icon}</Icon>
        </IconButton>
        <Typography variant="title" color="inherit" className="flex">
          {name}
        </Typography>
        <TimeDate />
      </Toolbar>
    </AppBar>

  )
}

export default AppHeader;
