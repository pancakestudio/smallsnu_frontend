import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { sideResClick } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    sideResToggle : state.sideResToggle,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onResClick: () => {
      dispatch(sideResClick())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
