import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { buildingClick, zoomChanged, mapResClick } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
    resData : state.sideResInfo,
    zoom: state.zoom,
    showSearchMarker: state.showSearchMarker,
    showSideResMarker: state.showSideResMarker,
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
      dispatch(mapResClick(resInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
