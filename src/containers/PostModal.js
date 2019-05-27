import { connect } from 'react-redux'
import { PostModal } from '../components/organisms/PostModal'
import { showWritePost , editPostFlag} from '../store/actions'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onShowWritePostModal: () => {
      dispatch(showWritePost())
    },
    onEdit: () => {
      dispatch(editPostFlag())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
