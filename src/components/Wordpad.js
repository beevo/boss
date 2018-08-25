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
    this.props.onChange(value);
  }

  render() {

    const { content, name } = this.props.wordpad;
    const app = this.props.app;
    const quillStyle = {
      height: '210px',
      paddingBottom: '40px'
    };
    return (
      <div>
        <AppHeader icon={app.icon} name={name} />
        <ReactQuill
          style={quillStyle}
          value={content}
          onChange={this.handleChange}
        />
      </div>

    )
  }
}

export default Wordpad;
