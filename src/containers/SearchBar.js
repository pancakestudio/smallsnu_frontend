import { connect } from 'react-redux'
import { SearchBar } from '../components/molecules/SearchBar'
import { toggleResMarker, requestAllRestaurants,
    search, requestAllSeminars, toggleSemiMarker,
    requestAllATMs, toggleATMMarker, requestAllBanks, toggleBankMarker,
    requestAllCafes, toggleCafeMarker, requestAllConves, toggleConvMarker

} from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBuilding: (bldgNo, bldgPos) => {
      dispatch(search(bldgNo, bldgPos))
    },
    onSearchRestaurant: () => {
      dispatch(requestAllRestaurants())
      dispatch(toggleResMarker())
    },
    onSearchSeminar: () => {
      dispatch(requestAllSeminars())
      dispatch(toggleSemiMarker())
    },
    onSearchATM: () => {
      dispatch(requestAllATMs())
      dispatch(toggleATMMarker())
    },
    onSearchBank: () => {
      dispatch(requestAllBanks())
      dispatch(toggleBankMarker())
    },
    onSearchCafe: () => {
      dispatch(requestAllCafes())
      dispatch(toggleCafeMarker())
    },
    onSearchConv: () => {
      dispatch(requestAllConves())
      dispatch(toggleConvMarker())
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
