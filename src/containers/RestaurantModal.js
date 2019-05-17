import { connect } from 'react-redux'
import { RestaurantModal } from '../components/organisms/RestaurantModal'
import { modalHide } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    res : state.selectedRes,
    show : state.showResModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalHide: () => {
      dispatch(modalHide())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantModal)
