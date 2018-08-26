import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateCodepadText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const { currentIndex } = state.app;
  const { icon } = state.app.apps[currentIndex];
  return {
    ...state.codepad,
    icon: icon
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
