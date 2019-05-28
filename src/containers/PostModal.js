import { connect } from 'react-redux'
import { PostModal } from '../components/organisms/PostModal'
import { showWritePost , editPostFlag, showPostPWCheck} from '../store/actions'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
    deleteFlag : state.isDelete,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onShowWritePostModal: () => {
      dispatch(showWritePost())
    },
    onEdit: () => {
      dispatch(editPostFlag())
    },
    onShowCheckPWModal: () => {
      dispatch(showPostPWCheck())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
