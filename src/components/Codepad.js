import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import AppHeader from '../components/AppHeader';
import TextField from '@material-ui/core/TextField';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Codepad extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    // console.log("XYD");
    // console.log(value);
    this.props.onChange(value);
    // this.setState({ text: value })
  }
  componentWillUnmount() {
    console.log("Unmounting");
  }
  render() {
    const { content, name, icon } = this.props;
    const style = {
      float: 'left',
      paddingLeft: '10px'
    };
    return (
      <div>
        <AppHeader icon={icon} name={name} />
        <div className="app-container">
          <AceEditor
            value={content}
            mode="javascript"
            theme="monokai"
            onChange={this.handleChange}
            name="brace-editor"
            editorProps={{$blockScrolling: true}}
            width='100%'
            height='75vh'
          />
        </div>

    </div>

    )
  }
}

export default Codepad;
