import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { sideResClick } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return{
    onResClick: () => {
      dispatch(sideResClick())
    },
  }
}

export default connect(null, mapDispatchToProps)(Sidebar)
