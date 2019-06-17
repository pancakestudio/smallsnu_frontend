import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { showPathFind, hidePathFind,
        searchSrc, searchDest,
        pickSrcPos, pickDestPos, findPath,
        requestAllRestaurants, toggleResMarker,
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
    pathFind: state.showPathFind,
    source: state.source,
    destination: state.destination,
    path: state.path,
    shuttleShow : state.showShuttleSideBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBack: () => {
      dispatch(hidePathFind())
    },
    onSearchSrc: (srcNo, srcPos) => {
      dispatch(searchSrc(srcNo, srcPos))
    },
    onSearchDest: (destNo, destPos) => {
      dispatch(searchDest(destNo, destPos))
    },
    onPickSrc: () => {
      dispatch(pickSrcPos())
    },
    onPickDest: () => {
      dispatch(pickDestPos())
    },
    onFind: (src, dest) => {
      dispatch(findPath(src, dest))
    },
    onPathFindClick: () => {
      dispatch(showPathFind())
    },
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
