import { connect } from 'react-redux'
import { Main } from '../components/pages/Main'
import { 
  requestBuilding,
  requestBoard, requestPost, 
  requestRestaurant,
  requestSeminar, requestBldgSeminars
} from '../store/actions'

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBuilding: (id) => {
      dispatch(requestBuilding(id))
    },
    getRestaurant: (id) => {
      dispatch(requestRestaurant(id))
    },
    getSeminar: (id) => {
      dispatch(requestSeminar(id))
    },
    getSeminarList: (bldgNo) => {
      dispatch(requestBldgSeminars(bldgNo))
    },
    getBoard: (id) => {
      dispatch(requestBoard(id))
    },
    getPost: (id) => {
      dispatch(requestPost(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
