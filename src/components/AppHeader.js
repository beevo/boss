import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';

function AppHeader({icon, name}) {
  const style = {
    textAlign: 'left',
    paddingLeft: '10px',
    width: '100%'
  }
  return (
    <h3 style={style}>
      <Icon>{icon}</Icon>
      {name}
    </h3>
  )
}

export default AppHeader;
