import { connect } from 'react-redux'
import React from "react";
import PropTypes from "prop-types";
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';
import Codepad from '../components/Codepad.js'

import 'brace/mode/java';
import 'brace/theme/github';


const mapStateToProps = (state, ownProps) => {
  return {
    app: state.app.apps[state.app.currentIndex]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codepad)
