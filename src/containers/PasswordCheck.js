import { connect } from 'react-redux'
import { PasswordCheck } from '../components/molecules/PasswordCheck'
import { hidePasswordCheck, deletePost, deleteComment } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    show: state.showPasswordCheck,
    target: state.deleteTarget,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onHideModal : () => {
      dispatch(hidePasswordCheck())
    },
    onDeletePost : (post, bldgNo, password) => {
      dispatch(deletePost(post, bldgNo, password))
    },
    onDeleteComment: (comment, postId, password) => {
      dispatch(deleteComment(comment, postId, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordCheck)
