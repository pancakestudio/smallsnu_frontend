import { connect } from 'react-redux'
import { BuildingInfo } from '../components/molecules/BuildingInfo'
import { showPost, showSeminar, showPostList, showSeminarList } from '../store/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onPostClick: (post) => {
      dispatch(showPost(post))
    },
    onSeminarClick: (semi) => {
      dispatch(showSeminar(semi))
    },
    onPostListClick: (posts) => {
      dispatch(showPostList(posts))
    },
    onSeminarListClick: (semis) => {
      dispatch(showSeminarList(semis))
    }
  }
}

export default connect(null, mapDispatchToProps)(BuildingInfo)
