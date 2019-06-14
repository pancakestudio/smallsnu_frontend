import { connect } from 'react-redux'
import { PostModal } from '../components/pages/PostModal'
import { showWritePost , showEditPost, showPasswordCheck, postLike, showEditComment, commentLike } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onEdit: (post, bldgNo) => {
      dispatch(showEditPost(post, bldgNo))
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
