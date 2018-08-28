import { connect } from 'react-redux'
import News from '../components/News.js';
import { fetchNews } from '../actions/appAction';
const mapStateToProps = (state, ownProps) => {
  const { currentIndex } = state.app;
  const { icon } = state.app.apps[currentIndex];
  return {
    ...state.news,
    icon: icon,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetch: (value) => {
      dispatch(fetchNews());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
