import { connect } from 'react-redux'
import { Sidebar } from '../components/organisms/Sidebar'
import { requestAllRestaurants, toggleResMarker,
        requestAllSeminars, toggleSemiMarker,
        requestAllCafes, toggleCafeMarker,
        requestAllBanks, toggleBankMarker,
        requestAllATMs, toggleATMMarker,
        requestAllConves, toggleConvMarker} from '../store/actions'

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
    },
    onCafeClick: () => {
      dispatch(requestAllCafes())
      dispatch(toggleCafeMarker())
    },
    onConvClick: () => {
      dispatch(requestAllConves())
      dispatch(toggleConvMarker())
    },
    onBankClick: () => {
      dispatch(requestAllBanks())
      dispatch(toggleBankMarker())
    },
    onATMClick: () => {
      dispatch(requestAllATMs())
      dispatch(toggleATMMarker())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
