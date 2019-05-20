import { connect } from 'react-redux'
import { WritePostModal } from '../components/organisms/WritePostModal'
import { modalHide, showPostList, savePost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showWritePostModal,
    bldgNo: state.selectedBldg.bldgNo
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onModalHide : () => {
      dispatch(modalHide())
    },
    onShowPostList : () => {
      dispatch(showPostList())
    },
    onSavePost : (post, bldgNo) => {
      dispatch(savePost(post, bldgNo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostModal)
