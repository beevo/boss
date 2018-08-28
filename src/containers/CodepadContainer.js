import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateText } from '../actions/appAction'

const mapStateToProps = (state, ownProps) => {
  const { currentIndex, files, apps } = state.app;
  const codepad = apps[currentIndex];
  return {
    file: files[codepad.currentFileId],
    icon: codepad.icon
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value, fileId) => {
      dispatch(updateText(value,fileId));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codepad)
