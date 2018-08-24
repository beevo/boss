import { connect } from 'react-redux'
import Codepad from '../components/Codepad.js'

const mapStateToProps = (state, ownProps) => {
  return {
    codepad: state.codepad
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Codepad)
