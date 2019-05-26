import { connect } from 'react-redux'
import { BuildingModal } from '../components/organisms/BuildingModal'

const mapStateToProps = (state) => {
  return {
    bldg: state.selectedBldg,
  }
}

export default connect(mapStateToProps, null)(BuildingModal)
