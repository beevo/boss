import { connect } from 'react-redux'
import { changeApp } from '../actions/appAction'
import LabelBottomNavigation from '../components/LabelBottomNavigation'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    currentApp: state.app.current
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onChange: (value) => {
      dispatch(changeApp(value));
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelBottomNavigation)
