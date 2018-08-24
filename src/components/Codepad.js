import React from "react";
import PropTypes from "prop-types";
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

function onChange(newValue) {
  console.log('change',newValue);
}
const Codepad = (props) => (
  <AceEditor
    mode="javascript"
    theme="monokai"
    onChange={onChange}
    name="brace-editor"
    editorProps={{$blockScrolling: true}}
    width='100%'
  />
);

export default Codepad;
