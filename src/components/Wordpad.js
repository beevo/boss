import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; // ES6
import AppHeader from '../components/AppHeader';
import Toolbar from '../components/Toolbar';
import FileMenuContainer from '../containers/FileMenuContainer';

class Wordpad extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    this.props.onChange(value,this.props.file.id);
  }

  render() {

    const { file, icon } = this.props;
    const quillStyle = {
      height: '60vh',
      paddingBottom: '40px'
    };
    return (
      <div>
        <AppHeader icon={icon} name={file.name} />
        <Toolbar>
          <FileMenuContainer />
        </Toolbar>
        <div className="app-container">
          <ReactQuill
            autoFocus
            style={quillStyle}
            value={file.content}
            onChange={this.handleChange}
          />
        </div>

      </div>

    )
  }
}

export default Wordpad;
