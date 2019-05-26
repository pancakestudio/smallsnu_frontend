import { connect } from 'react-redux'
import { Header } from '../components/organisms/Header'
import { toggleSideBar } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuClick: (bldgNo) => {
      dispatch(toggleSideBar())
    }
  }
}

export default connect(null, mapDispatchToProps)(Header)
