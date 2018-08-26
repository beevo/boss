import React, { Component } from 'react';
import PropTypes from "prop-types";
import { render } from 'react-dom';
import AceEditor from 'react-ace';
import AppHeader from '../components/AppHeader';

class Codepad extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    const { name, icon } = this.props;
    return (
      <div>
        <AppHeader icon={icon} name={name} />
        <p>Stuff</p>
      </ div>
    )
  }
}

export default Codepad;
