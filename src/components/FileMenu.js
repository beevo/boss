import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class FileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchorEl: null, } // You can also pass a Quill Delta here
    this.handleOpenFile = this.handleOpenFile.bind(this)
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleOpenFile = () => {
    const { id } = this.props.app;
    console.log(this.props);
    this.setState({ anchorEl: null });
    this.props.onOpenFile(id, 1);
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
          <MenuItem onClick={this.handleOpenFile}>Open File</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FileMenu;
