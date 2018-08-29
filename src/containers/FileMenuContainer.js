import { connect } from 'react-redux'
import FileMenu from '../components/FileMenu.js';
import { changeFile } from '../actions/appAction';
import { createFile } from '../actions/filesAction';

const mapStateToProps = (state, ownProps) => {
  const { currentIndex } = state.app;
  return {
    app: state.app.apps[currentIndex],
    files: state.files.items,
    nextFileId: state.files.nextId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onOpenFile: (appId, fileId) => {
      dispatch(changeFile({
        id: appId,
        currentFileId: fileId
      }));
    },
    onCreateNewFile: (appId, fileName, newFileId) => {
      dispatch(createFile({
        fileName: fileName
      }));
      dispatch(changeFile({
        id: appId,
        currentFileId: newFileId
      }));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileMenu)
