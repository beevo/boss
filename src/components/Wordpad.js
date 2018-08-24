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
    this.setState({ text: value })
  }

  render() {
    const style = {
      height: '460px',
      paddingBottom: '40px'
    };
    return (
      <ReactQuill
        style={style}
        value={this.state.text}
        onChange={this.handleChange} />
    )
  }
}

export default Wordpad;
