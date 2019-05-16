import { put, call, take, fork } from 'redux-saga/effects';
import * as actions from './actions'
import * as types from './actionTypes'
import * as api from '../services/api'
import * as reducers from './reducers'

function* handleRequestBldgInfo(){
  while(true){
    const action = yield take(types.BUILDING_CLICK)
    const { data, error } = yield call(api.getBuildingInfo, action.bldgNo)
    if(data && !error){
      const info = data.info
      const rests = data.restaurants
      const semis = data.seminars
      const lecs = data.lectures
      const posts = data.posts.slice(-3).reverse()

      yield put(actions.getBuildingSuccess(info, rests, semis, lecs, posts))
    } else {
      const errormsg = '건물 정보를 받아오지 못했습니다.'
      yield put(actions.getBuildingFailure(errormsg))
    }
  }
}

function* handleRequestResInfo(){
  while(true){
    const action = yield take(types.SIDE_RESTAURANT_CLICK)
    const sideResToggle = action.sideResToggle
    const {data, error} = yield call(api.getRestaurantInfo)
    if(data && !error){
      yield put(actions.getRestaurantSucess(data, sideResToggle))
      console.log(data);
    }else{
      const errormsg = '식당 정보를 받아오지 못했습니다.'
      yield put(actions.getRestaurantFailure(errormsg))
    }
  }
}

export default function* rootSaga(){
  yield fork(handleRequestBldgInfo)
  yield fork(handleRequestResInfo)
}
