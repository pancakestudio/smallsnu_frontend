import { connect } from 'react-redux'
import { BoardModal } from '../components/organisms/BoardModal'
import { showWritePost } from '../store/actions'

const mapStateToProps = (state) => {
  return{
    posts : state.selectedPostList,
    bldgNo : state.selectedBoardBldgNo
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onShowWritePostModal: () => {
      dispatch(showWritePost())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardModal)
