import { connect } from 'react-redux'
import Files from '../components/Files.js';
import { fetchNews } from '../actions/appAction';

const mapStateToProps = (state, ownProps) => {
  // const { currentIndex } = state.app;
  // const { icon } = state.app.apps[currentIndex];
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Files)
