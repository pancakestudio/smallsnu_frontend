import { connect } from 'react-redux'
import { PostBoardModal } from '../components/organisms/PostBoardModal'
import { modalHide, showPost, showBuilding, showWritePost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show : state.showPostBoardModal,
    posts : state.selectedPostBoard
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onModalHide: () => {
      dispatch(modalHide())
    },
    onPostClick: (post) => {
      dispatch(showPost(post))
    },
    onShowBuildingModal: () => {
      dispatch(showBuilding())
    },
    onShowWritePostModal: () => {
      dispatch(showWritePost())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostBoardModal)
