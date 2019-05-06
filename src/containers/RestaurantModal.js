import { connect } from 'react-redux'
import { RestaurantModal } from '../components/organisms/RestaurantModal'
import { modalHide } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    data : state.mapResInfo,
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
