import { connect } from 'react-redux';
import Wordpad from '../components/Wordpad.js';
import { updateText } from '../actions/appAction';

const mapStateToProps = (state, ownProps) => {
  const { currentIndex, files, apps } = state.app;
  const wordpad = apps[currentIndex];
  return {
    file: files[wordpad.currentFileId],
    icon: wordpad.icon
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
)(Wordpad)
