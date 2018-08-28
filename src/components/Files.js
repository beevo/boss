import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';

class Files extends Component {
  constructor(props) {
    super(props)
  }

  handleChange(value) {
  }
  componentWillUnmount() {
    console.log("Unmounting");
  }
  render() {
    return (
      <h1>Files</h1>
    )
  }
}

export default Files;
