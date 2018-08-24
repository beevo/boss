import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill'; // ES6

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
    const headerStyle = {
      textAlign: 'left',
      paddingLeft: '10px',
      width: '100%'
    };
    const quillStyle = {
      height: '460px',
      paddingBottom: '40px'
    };
    return (
      <div>
        <h3 style={headerStyle}>{name}</h3>
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
