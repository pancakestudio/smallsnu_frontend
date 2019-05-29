import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { zoomChanged, hideMarkers } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
    resData : state.allRestaurants,
    semis: state.allSeminars,
    banks: state.allBanks,
    atms: state.allATMs,
    cafes: state.allCafes,
    conves: state.allConves,

    zoom: state.zoom,
    searchedBldg: state.searchedBldg,
    showSearchMarker: state.showSearchMarker,
    showResMarkers: state.showResMarkers,
    showSemiMarkers: state.showSemiMarkers,
    showBankMarkers: state.showBankMarkers,
    showATMMarkers: state.showATMMarkers,
    showCafeMarkers: state.showCafeMarkers,
    showConvMarkers: state.showConvMarkers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onZoom: (zoomLevel) => {
      dispatch(zoomChanged(zoomLevel))
    },
    onBackgroundClick: () => {
      dispatch(hideMarkers())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
