import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class FileMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="file-menu">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          FILE
        </Button>
        <Button disabled>
          Edit
        </Button>
        <Button disabled>
          View
        </Button>
        <Button>
          About
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>New File</MenuItem>
          <MenuItem onClick={this.handleClose}>Open File</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FileMenu;