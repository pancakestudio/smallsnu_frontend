import { connect } from 'react-redux'
import { SearchBar } from '../components/molecules/SearchBar'
import { searchValueChange, search } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    bldgNo: state.searchingBldg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchValueChange: (bldgNo) => {
      dispatch(searchValueChange(bldgNo))
    },
    onSearch: (bldgNo, bldgPos) => {
      console.log(bldgNo)
      dispatch(search(bldgNo, bldgPos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
