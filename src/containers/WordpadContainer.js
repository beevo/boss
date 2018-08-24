import { connect } from 'react-redux'
import Wordpad from '../components/Wordpad.js'


const mapStateToProps = (state, ownProps) => {
  return {
    wordpad: state.wordpad
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wordpad)
