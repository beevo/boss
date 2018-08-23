import { connect } from 'react-redux'
import { changeApp } from '../actions/application'
import LabelBottomNavigation from '../components/LabelBottomNavigation'

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    onChange: () => {
      dispatch(changeApp());
      // dispatch(setVisibilityFilter(ownProps.filter))
    }
}}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelBottomNavigation)
