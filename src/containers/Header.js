import { connect } from 'react-redux'
import { Header } from '../components/organisms/Header'
import { toggleSidebar } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (bldgNo) => {
      dispatch(toggleSidebar())
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
