import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { requestAllRestaurants, toggleResMarker, requestAllSeminars, toggleSemiMarker } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showSideBar
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResClick: () => {
      dispatch(requestAllRestaurants())
      dispatch(toggleResMarker())
    },
    onSemiClick: () => {
      dispatch(requestAllSeminars())
      dispatch(toggleSemiMarker())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
