import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Codepad extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  componentWillUnmount() {
    alert("UNMOUNTING");
  }
  render() {
    const style = {
      height: '460px',
      paddingBottom: '40px'
    };
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={this.handleChange}
        name="brace-editor"
        editorProps={{$blockScrolling: true}}
        width='100%'
      />
    )
  }
}

export default Codepad;
