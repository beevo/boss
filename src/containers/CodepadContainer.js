import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { update } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  return {
    codepad: state.codepad
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      console.log("ready to dispact");
      console.log(value);
      dispatch(update(value));
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codepad)
