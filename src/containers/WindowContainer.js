import { connect } from 'react-redux'
import { changeApp } from '../actions/appAction'
import Window from '../components/Window.js'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.app.apps[state.app.currentIndex]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Window)
