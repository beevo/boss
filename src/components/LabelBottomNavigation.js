import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = {
  root: {
    flex: 1,
  },
};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.props.onChange(value);
  };

  render() {
    const { classes, currentIndex, apps } = this.props;
    return (
      <BottomNavigation value={currentIndex} onChange={this.handleChange} className={classes.root}>
        {
          // <Start />
        }
        {apps.map(app =>
          <BottomNavigationAction
            key={app.id}
            label={app.label}
            value={app.id}
            icon={<Icon>{app.icon}</Icon>} />
        )}
        {
          // <Clock />
        }

      </BottomNavigation>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);
