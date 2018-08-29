import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import OpenFileDialog from '../components/OpenFileDialog.js';
import NewFileDialog from '../components/NewFileDialog.js';

class FileMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      openFileToggle: false,
      newFileToggle: false
    } // You can also pass a Quill Delta here
    this.handleOpenFile = this.handleOpenFile.bind(this)
  }
  handleClose = () => {
    this.setState({
      anchorEl: null,
      openFileToggle: false,
      newFileToggle: false
    });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleShowDialog = (dialog) => {
    console.log(dialog);
    this.setState(dialog);
  }
  handleOpenFile = (fileId) => {
    this.handleClose();
    const { id } = this.props.app;
    if (fileId > -1) {
      this.props.onOpenFile(id, fileId);
    }
    this.setState({
      openFileToggle: false,
      newFileToggle: false
    });
    // this.props.onOpenFile(id, 1);
  };
  handleNewFile = (fileName) => {
    alert(fileName);
    this.handleClose();
    if (fileName) {
      const { id } = this.props.app;
      this.props.onCreateNewFile(id, fileName, this.props.nextFileId);
    }
    // this.props.onOpenFile(id, 1);
  };

  render() {
    const { anchorEl, openFileToggle, newFileToggle } = this.state;
    const { files } = this.props;
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
          open={openFileToggle}
          files={files}
          onClose={this.handleOpenFile}
        />
      <NewFileDialog
          open={newFileToggle}
          files={files}
          onClose={this.handleNewFile}
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
          <MenuItem onClick={() => this.handleShowDialog({ newFileToggle: true })}>
            New File
          </MenuItem>
          <MenuItem onClick={() => this.handleShowDialog({ openFileToggle: true })}>
            Open File
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FileMenu;
