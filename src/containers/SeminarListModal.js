import { connect } from 'react-redux'
import { SeminarListModal } from '../components/organisms/SeminarListModal'
import { showSeminar, modalHide, changeSeminarPage } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    semis: state.selectedSemiList,
    activePage: state.activeSemiPage,
    show: state.showSemiListModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSeminarClick: (semi) => {
      dispatch(showSeminar(semi))
    },
    onModalHide: () => {
      dispatch(modalHide())
    },
    onPaginationClick: (page) => {
      dispatch(changeSeminarPage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SeminarListModal)
