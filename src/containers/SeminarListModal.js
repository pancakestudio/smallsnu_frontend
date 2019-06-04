import { connect } from 'react-redux'
import { SeminarListModal } from '../components/pages/SeminarListModal'
import { changeSeminarPage } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    bldgNo: state.selectedSemiListBldgNo,
    semis: state.selectedSemiList,
    activePage: state.activeSemiPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPaginationClick: (page) => {
      dispatch(changeSeminarPage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeminarListModal)
