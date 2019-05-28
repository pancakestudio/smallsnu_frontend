import { connect } from 'react-redux'
import { PostPWCheck } from '../components/molecules/PostPWCheck'
import { hidePostPWCheck, deletePost } from '../store/actions'

const mapStateToProps = (state) => {
  return {
    show: state.showPostPWCheck,
    post: state.selectedPost,
    bldgNo: state.selectedBoardBldgNo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onHideModal : () => {
      dispatch(hidePostPWCheck())
    },
    onDelete : (post, bldgNo) => {
      dispatch(deletePost(post, bldgNo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPWCheck)
