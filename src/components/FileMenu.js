import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OpenFileDialog from '../components/OpenFileDialog.js';

class FileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      openDialog: false
    } // You can also pass a Quill Delta here
    this.handleOpenFile = this.handleOpenFile.bind(this)
  }
  handleClose = () => {
   this.setState({ anchorEl: null });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleOpenFileDialog = () => {
    this.setState({ openDialog: true });
  }
  handleOpenFile = (fileId) => {
    this.handleClose();
    const { id } = this.props.app;
    if (fileId > -1) {
      this.props.onOpenFile(id, fileId);
    }
    this.setState({ openDialog: false });
    // this.props.onOpenFile(id, 1);
  };

  render() {
    const { anchorEl, openDialog } = this.state;
    const { files } = this.props;
    console.log(files);
    return (
      <div className="file-menu">
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          FILE
        </Button>
        <OpenFileDialog
          selectedValue={this.state.selectedValue}
          open={openDialog}
          files={files}
          onClose={this.handleOpenFile}
        />

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
          <MenuItem onClick={this.handleOpenFileDialog}>Open File</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FileMenu;
