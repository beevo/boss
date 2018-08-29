import React, { Component } from 'react';

class Files extends Component {
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
