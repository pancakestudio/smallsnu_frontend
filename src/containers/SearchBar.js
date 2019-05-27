import { connect } from 'react-redux'
import { SearchBar } from '../components/molecules/SearchBar'
import { toggleResMarker, requestAllRestaurants,
  searchValueChange, search, requestAllSeminars, toggleSemiMarker } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchValueChange: (bldgNo) => {
      dispatch(searchValueChange(bldgNo))
    },
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
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
