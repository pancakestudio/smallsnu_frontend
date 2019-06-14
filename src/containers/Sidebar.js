import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { showPathFind, hidePathFind,
        requestAllRestaurants, toggleResMarker,
        requestAllSeminars, toggleSemiMarker,
        requestAllCafes, toggleCafeMarker,
        requestAllBanks, toggleBankMarker,
        requestAllATMs, toggleATMMarker,
        requestAllConves, toggleConvMarker,
        toggleSidebar
} from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showSideBar,
    pathFind: state.showPathFind
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: () => {
      dispatch(hidePathFind())
    },
    onPathFindClick: () => {
      dispatch(showPathFind())
    },
    onResClick: () => {
      dispatch(requestAllRestaurants())
      dispatch(toggleResMarker())
    },
    onSemiClick: () => {
      dispatch(requestAllSeminars())
      dispatch(toggleSemiMarker())
    },
    onCafeClick: () => {
      dispatch(requestAllCafes())
      dispatch(toggleCafeMarker())
    },
    onConvClick: () => {
      dispatch(requestAllConves())
      dispatch(toggleConvMarker())
    },
    onBankClick: () => {
      dispatch(requestAllBanks())
      dispatch(toggleBankMarker())
    },
    onATMClick: () => {
      dispatch(requestAllATMs())
      dispatch(toggleATMMarker())
    },
    hide: () => {
      dispatch(toggleSidebar())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
