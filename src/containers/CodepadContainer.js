import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateCodepadText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  return {
    codepad: state.codepad
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
