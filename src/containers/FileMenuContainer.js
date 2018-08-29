import { connect } from 'react-redux'
import FileMenu from '../components/FileMenu.js';
import { changeFile } from '../actions/appAction';

const mapStateToProps = (state, ownProps) => {
  const { currentIndex } = state.app;
  return {
    app: state.app.apps[currentIndex],
    files: state.files.items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOpenFile: (appId, fileId) => {
      dispatch(changeFile({
        id: appId,
        currentFileId: fileId
      }));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileMenu)
