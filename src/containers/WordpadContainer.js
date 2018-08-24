import { connect } from 'react-redux'
import Wordpad from '../components/Wordpad.js'

import { updateWordpadText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  return {
    wordpad: state.wordpad,
    app: state.app.apps[state.app.currentIndex]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("wordpad dispatch");
  return {
    onChange: (value) => {
      dispatch(updateWordpadText(value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wordpad)
