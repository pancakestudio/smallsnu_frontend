import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { buildingClick, zoomChanged } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
    resPos : state.sideResLocation,
    resData : state.sideResinfo,
    zoom: state.zoom,
    showSearchMarker: state.showSearchMarker,
    showSideResMarker: state.showSideResMarker
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMapClick: (bldgNo, latlng) => {
      dispatch(buildingClick(bldgNo, latlng))
    },
    onZoom: (zoomLevel) => {
      dispatch(zoomChanged(zoomLevel))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
