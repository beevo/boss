import { connect } from 'react-redux'
import { changeApp } from '../actions/appAction'
import Window from '../components/Window.js'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    app: state.app.apps[state.app.currentIndex]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)
