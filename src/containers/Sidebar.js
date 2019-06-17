import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { requestAllRestaurants, toggleResMarker,
        requestAllSeminars, toggleSemiMarker,
        requestAllCafes, toggleCafeMarker,
        requestAllBanks, toggleBankMarker,
        requestAllATMs, toggleATMMarker,
        requestAllConves, toggleConvMarker,
        requestAllShuttles, toggleShuttleMarker,
        requestAllRevShuttles, toggleRevShuttleMarker,
        toggleShuttleMenuMarker,
        toggleSidebar
} from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showSideBar,
    shuttleShow : state.showShuttleSideBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResClick: () => {
      dispatch(requestAllRestaurants())
      dispatch(toggleResMarker())
    },
    onShuttleMenuClick: () => {
      dispatch(toggleShuttleMenuMarker())
    },
    onShuttleClick: () => {
      dispatch(requestAllShuttles())
      dispatch(toggleShuttleMarker())
    },
    onRevShuttleClick: () => {
      dispatch(requestAllRevShuttles())
      dispatch(toggleRevShuttleMarker())
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
