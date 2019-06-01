import { connect } from 'react-redux'
import { Main } from '../components/pages/Main'
import {
  requestBuilding,
  requestBoard, requestPost,
  requestRestaurant,
  requestSeminar, requestBldgSeminars,
  requestATM, requestBank, requestCafe, requestConv
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
    getATM: (id) => {
      dispatch(requestATM(id))
    },
    getBank: (id) => {
      dispatch(requestBank(id))
    },
    getCafe: (id) => {
      dispatch(requestCafe(id))
    },
    getConv: (id) => {
      dispatch(requestConv(id))
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
