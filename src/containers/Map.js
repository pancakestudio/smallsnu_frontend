import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { buildingClick, zoomChanged } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
    zoom: state.zoom
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
