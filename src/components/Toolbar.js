import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';


class Toolbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, icon, content } = this.props;
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Toolbar;
