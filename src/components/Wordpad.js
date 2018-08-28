import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; // ES6
import Icon from '@material-ui/core/Icon';
import AppHeader from '../components/AppHeader';

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
      height: '70vh',
      paddingBottom: '40px'
    };
    return (
      <div>
        <AppHeader icon={icon} name={file.name} />
        <div className="app-container">
          <ReactQuill
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
