import { connect } from 'react-redux'
import { WriteComment } from '../components/molecules/WriteComment'
import { saveComment, editComment } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return{
    onSaveComment: (comment, postId) => {
      dispatch(saveComment(comment, postId))
    },
    onEditComment: (comment, postId, password) => {
      dispatch(editComment(comment, postId))
    }
  }
}

export default connect(null, mapDispatchToProps)(WriteComment)
