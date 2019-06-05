import { connect } from 'react-redux'
import { WritePostModal } from '../components/organisms/WritePostModal'
import { savePost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    show: state.showWritePostModal,
    bldgNo: state.selectedBoardBldgNo
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onSavePost : (post, bldgNo) => {
      dispatch(savePost(post, bldgNo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WritePostModal)
