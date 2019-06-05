import { connect } from 'react-redux'
import { EditCommentModal } from '../components/organisms/EditCommentModal'
import { hideEditComment } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    show: state.showEditComment,
    comment: state.editingComment,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHideModal: () => {
      dispatch(hideEditComment())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentModal)
