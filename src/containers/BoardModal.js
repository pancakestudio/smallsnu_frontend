import { connect } from 'react-redux'
import { BoardModal } from '../components/organisms/BoardModal'
import { changeBoardPage, showWritePost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    posts : state.selectedPostList,
    bldgNo : state.selectedBoardBldgNo,
    activePage: state.activeBoardPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onPaginationClick: (page) => {
      dispatch(changeBoardPage(page))
    },
    onShowWritePostModal: (bldgNo) => {
      dispatch(showWritePost(bldgNo))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardModal)
