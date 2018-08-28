import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class NewButton extends Component {
  componentWillMount(){
  }

  componentWillReceiveProps(nextProps){

  }

  render() {
    const { classes, children } = this.props;
    return (
      <div>
        <Button variant="contained" className={classes.button}>
          New File
        </Button>
      </div>

    );

  }
}

NewButton.propTypes = {
}
export default withStyles(styles)(NewButton);
