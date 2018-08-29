/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import blue from '@material-ui/core/colors/blue';



class OpenFileDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleClose = () => {
    this.props.onClose(null);
  };

  handleSubmit(event){
    alert("SUBMIT");
    this.props.onClose(this.state.fileName);
    event.preventDefault();
  };

  render() {
    const { onClose, open, files } = this.props;

    return (
        <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={open}>
          <form onSubmit={this.handleSubmit}>
            <DialogContent>
              <DialogContentText>
                *File extensions DO NOT matter. All files are treated as text. <br />
                Changes to the current file will be saved automatically.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="fileName"
                onChange={this.handleChange('fileName')}
                label="New File Name"
                type="text"
                fullWidth
                value={this.state.textValue}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Create New File
              </Button>
            </DialogActions>
          </form>

        </Dialog>

    );
  }
}

OpenFileDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default OpenFileDialog;
