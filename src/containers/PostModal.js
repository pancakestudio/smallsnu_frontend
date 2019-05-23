import { connect } from 'react-redux'
import { PostModal } from '../components/organisms/PostModal'

const mapStateToProps = (state) => {
  return {
    post: state.selectedPost,
  }
}

export default connect(mapStateToProps, null)(PostModal)
