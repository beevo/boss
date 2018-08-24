import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateCodepadText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    codepad: state.codepad,
    app: state.app.apps[state.app.currentIndex]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(updateCodepadText(value));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codepad)
