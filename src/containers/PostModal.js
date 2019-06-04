import { connect } from 'react-redux'
import { PostModal } from '../components/pages/PostModal'
import { showWritePost , editPostFlag, showPasswordCheck, postLike, showEditComment, commentLike } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onShowWritePostModal: (bldgNo) => {
      dispatch(showWritePost(bldgNo))
    },
    onEdit: () => {
      dispatch(editPostFlag())
    },
    onDelete: (post) => {
      dispatch(showPasswordCheck(post))
    },
    onLike: (postId) => {
      dispatch(postLike(postId))
    },
    onEditComment: (comment) => {
      dispatch(showEditComment(comment))
    },
    onDeleteComment: (comment) => {
      dispatch(showPasswordCheck(comment))
    },
    onLikeComment: (commentId, postId) => {
      dispatch(commentLike(commentId, postId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
