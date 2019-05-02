import { connect } from 'react-redux'
import { BuildingModal } from '../components/organisms/BuildingModal'
import { modalHide } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    bldgNo: state.selectedBldg,
    show: state.showBldgModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalHide: () => {
      dispatch(modalHide())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuildingModal)
