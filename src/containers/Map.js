import { connect } from 'react-redux'
import { Map } from '../components/organisms/Map'
import { buildingClick } from '../store/actions'
import { getBldgNo } from '../utils/Functions'

const mapStateToProps = (state) => {
  return {
    currentPos: state.currentPos,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMapClick: (latlng) => {
      dispatch(buildingClick(getBldgNo(latlng), latlng))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)
