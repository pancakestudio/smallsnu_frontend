import { connect } from 'react-redux'
import { PostModal } from '../components/organisms/PostModal'
import { modalHide, showPostList } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
    show: state.showPostModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onModalHide: () => {
      dispatch(modalHide())
    },
    onShowPostList: () => {
      dispatch(showPostList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModal)
