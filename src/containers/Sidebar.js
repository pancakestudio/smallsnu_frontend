import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { requestAllRestaurants, sideResClick, requestAllSeminars, sideSemiClick } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showSideBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResClick: () => {
      dispatch(requestAllRestaurants())
      dispatch(sideResClick())
    },
    onSemiClick: () => {
      dispatch(requestAllSeminars())
      dispatch(sideSemiClick())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
