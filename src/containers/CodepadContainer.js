import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'
import { updateText } from '../actions/filesAction'

const mapStateToProps = (state, ownProps) => {
  const { currentIndex, apps } = state.app;
  const codepad = apps[currentIndex];
  return {
    file: state.files.items[codepad.currentFileId],
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
