/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const emails = ['username@gmail.com', 'user02@gmail.com'];


class OpenFileDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  render() {
    const { onClose, selectedValue, open, files } = this.props;

    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true}>
        <DialogTitle id="simple-dialog-title">Select File</DialogTitle>
        <div>
          <List>
            {files.map((file, key) => (
              <ListItem button onClick={() => this.handleListItemClick(file.id)} key={file.id}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        </div>
      </Dialog>
    );
  }
}

OpenFileDialog.propTypes = {
  onClose: PropTypes.func,
  selectedValue: PropTypes.string,
};

export default OpenFileDialog;
