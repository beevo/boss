import { connect } from 'react-redux'
import { changeApp } from '../actions/appAction'
import LabelBottomNavigation from '../components/LabelBottomNavigation'

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.app
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(changeApp(value));
    }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelBottomNavigation)
