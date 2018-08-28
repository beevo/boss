import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateCodepadText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  const { app, codepad } = state;
  const { currentIndex, files, apps } = app;
  const { icon } = apps[currentIndex];
  return {
    file: files[codepad.currentFileId],
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
