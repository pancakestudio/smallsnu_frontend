import { connect } from 'react-redux'
import { SeminarModal } from '../components/organisms/SeminarModal'
import { modalHide } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    semi: state.selectedSemi,
    show: state.showSemiModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalHide: () => {
      dispatch(modalHide())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeminarModal)
