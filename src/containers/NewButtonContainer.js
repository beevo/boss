import { connect } from 'react-redux'
import { changeApp } from '../actions/appAction'
import NewButton from '../components/NewButton.js'

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
)(NewButton)
