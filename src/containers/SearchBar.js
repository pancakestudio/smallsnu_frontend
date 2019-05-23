import { connect } from 'react-redux'
import { SearchBar } from '../components/molecules/SearchBar'
import { searchValueChange, search } from '../store/actions'
import { requestAllRestaurants } from '../store/actions'

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
    },
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
