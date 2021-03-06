import { connect } from 'react-redux'
import { WritePostModal } from '../components/organisms/WritePostModal'
import { hideWritePost, savePost, editPost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showWritePostModal,
    bldgNo: state.selectedBoardBldgNo,
    isEdit: state.isEdit,
    editPost: state.editingPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onHide: () => {
      dispatch(hideWritePost())
    },
    onSavePost : (post, bldgNo) => {
      dispatch(savePost(post, bldgNo))
    },
    onEditPost : (post, bldgNo) => {
      dispatch(editPost(post, bldgNo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostModal)
