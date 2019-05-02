import { connect } from 'react-redux'
import { SearchBar } from '../components/molecules/SearchBar'
import { searchValueChange, search } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchValueChange: (bldgNo) => {
      dispatch(searchValueChange(bldgNo))
    },
    onSearch: (bldgNo, bldgPos) => {
      dispatch(search(bldgNo, bldgPos))
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)
