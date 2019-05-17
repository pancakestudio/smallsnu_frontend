import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { buildingClick, zoomChanged, hideMarkers, showRestaurant, showSeminarList } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
    resData : state.restaurantList,
    semis: state.seminarList,
    zoom: state.zoom,
    showSearchMarker: state.showSearchMarker,
    showResMarkers: state.showResMarkers,
    showSemiMarkers: state.showSemiMarkers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMapClick: (bldgNo, latlng) => {
      dispatch(buildingClick(bldgNo, latlng))
    },
    onZoom: (zoomLevel) => {
      dispatch(zoomChanged(zoomLevel))
    },
    onResClick: (resInfo) => {
      dispatch(showRestaurant(resInfo))
    },
    onBackgroundClick: () => {
      dispatch(hideMarkers())
    },
    onSeminarListClick: (semis) => {
      dispatch(showSeminarList(semis))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
