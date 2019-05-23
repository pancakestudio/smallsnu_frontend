import { connect } from 'react-redux'
import { RestaurantModal } from '../components/organisms/RestaurantModal'

const mapStateToProps = (state) => {
  return{
    res : state.selectedRes,
  }
}

export default connect(mapStateToProps, null)(RestaurantModal)
