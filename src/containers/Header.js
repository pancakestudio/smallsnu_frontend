import { connect } from 'react-redux'
import Header from '../components/organisms/Header'
import { searchBuildingState, searchBuildingClick } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    bldgNo: state.selectedBldg
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchBuildingState: (bldgNo) => {
      dispatch(searchBuildingState(bldgNo))
    },
    onSearchBuilding: (bldgNo, curPos) => {
      console.log(bldgNo)
      dispatch(searchBuildingClick(bldgNo, curPos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
