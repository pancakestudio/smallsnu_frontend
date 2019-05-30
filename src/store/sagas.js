import { put, call, take, fork } from 'redux-saga/effects';
import * as actions from './actions'
import * as types from './actionTypes'
import * as api from '../services/api'
import * as reducers from './reducers'
import { historyPush } from '../utils/Functions'

function* handleRequestBldgInfo(){
  while(true){
    const action = yield take(types.REQUEST_BUILDING)
    const { data, error } = yield call(api.getBuildingInfo, action.bldgNo)
    if(data && !error){
      const krName = data.kr_name
      const bldgNo = data.code
      const info = data.info
      const rests = data.restaurants
      const semis = data.seminars
      const lecs = data.lectures
      const posts = data.posts.reverse()
      yield put(actions.getBuildingSuccess(krName, bldgNo, info, rests, semis, lecs, posts))
    } else {
      const errormsg = '건물 정보를 받아오지 못했습니다.'
      yield put(actions.getBuildingFailure(errormsg))
    }
  }
}

function* handleRequestBoardInfo(){
  while(true){
    const action = yield take(types.REQUEST_BOARD)
    const { data, error } = yield call(api.getBoardInfo, action.bldgNo)
    if(data && !error){
      const posts = data.reverse()
      const bldgNo = action.bldgNo
      yield put(actions.getBoardSuccess(posts, bldgNo))
    } else {
      const errormsg = '게시판 정보를 받아오지 못했습니다.'
      yield put(actions.getBoardFailure(errormsg))
    }
  }
}

function* handleRequestPostInfo(){
  while(true){
    const action = yield take(types.REQUEST_POST)
    const { data, error } = yield call(api.getPostInfo, action.id)
    if(data && !error){
      const post = data
      yield put(actions.getPostSuccess(post))
    } else {
      const errormsg = '게시글 정보를 받아오지 못했습니다.'
      yield put(actions.getPostFailure(errormsg))
    }
  }
}

function* handleRequestResInfo(){
  while(true){
    const action = yield take(types.REQUEST_RESTAURANT)
    const { data, error } = yield call(api.getRestaurantInfo, action.id)
    if(data && !error){
      yield put(actions.getRestaurantSuccess(data))
    } else {
      const errormsg = '식당 정보를 받아오지 못했습니다.'
      yield put(actions.getRestaurantFailure(errormsg))
    }
  }
}

function* handleRequestAllResInfo(){
  while(true){
    yield take(types.REQUEST_ALL_RESTAURANTS)
    const {data, error} = yield call(api.getAllRestaurantsInfo)
    if(data && !error){
      yield put(actions.getAllRestaurantsSuccess(data))
    }else{
      const errormsg = '식당 정보를 받아오지 못했습니다.'
      yield put(actions.getAllRestaurantsFailure(errormsg))
    }
  }
}

function* handleRequestSemiInfo(){
  while(true){
    const action = yield take(types.REQUEST_SEMINAR)
    const { data, error } = yield call(api.getSeminarInfo, action.id)
    if(data && !error){
      yield put(actions.getSeminarSuccess(data))
    } else {
      const errormsg = '세미나 정보를 받아오지 못했습니다.'
      yield put(actions.getSeminarFailure(errormsg))
    }
  }
}

function* handleRequestBldgSemiInfo(){
  while(true){
    const action = yield take(types.REQUEST_BLDG_SEMINARS)
    const { data, error } = yield call(api.getBldgSeminarInfo, action.bldgNo)
    if(data && !error){
      const semis = data
      const bldgNo = action.bldgNo
      yield put(actions.getBldgSeminarsSuccess(semis, bldgNo))
    } else {
      const errormsg = '세미나 정보를 받아오지 못했습니다.'
      yield put(actions.getBldgSeminarsFailure(errormsg))
    }
  }
}

function* handleRequestAllSemiInfo(){
  while(true){
    yield take(types.REQUEST_ALL_SEMINARS)
    const { data, error } = yield call(api.getAllSeminarsInfo)
    if(data && !error){
      const semis = data
      yield put(actions.getAllSeminarsSuccess(semis))
    } else {
      const errormsg = '세미나 정보를 받아오지 못했습니다.'
      yield put(actions.getAllSeminarsFailure(errormsg))
    }
  }
}

function* handleRequestBankInfo(){
  while(true){
    const action = yield take(types.REQUEST_BANK)
    const { data, error } = yield call(api.getBankInfo, action.id)
    if(data && !error){
      yield put(actions.getBankSuccess(data))
    } else {
      const errormsg = '은행 정보를 받아오지 못했습니다.'
      yield put(actions.getBankFailure(errormsg))
    }
  }
}


function* handleRequestAllBankInfo(){
  while(true){
    yield take(types.REQUEST_ALL_BANKS)
    const { data, error } = yield call(api.getAllBanksInfo)
    if(data && !error){
      const banks = data
      yield put(actions.getAllBanksSuccess(banks))
    } else {
      const errormsg = '은행 정보를 받아오지 못했습니다.'
      yield put(actions.getAllBanksFailure(errormsg))
    }
  }
}

function* handleRequestATMInfo(){
  while(true){
    const action = yield take(types.REQUEST_ATM)
    const { data, error } = yield call(api.getATMInfo, action.id)
    if(data && !error){
      yield put(actions.getATMSuccess(data))
    } else {
      const errormsg = 'ATM 정보를 받아오지 못했습니다.'
      yield put(actions.getATMFailure(errormsg))
    }
  }
}


function* handleRequestAllATMInfo(){
  while(true){
    yield take(types.REQUEST_ALL_ATMS)
    const { data, error } = yield call(api.getAllATMsInfo)
    if(data && !error){
      const atms = data
      yield put(actions.getAllATMsSuccess(atms))
    } else {
      const errormsg = 'ATM 정보를 받아오지 못했습니다.'
      yield put(actions.getAllATMsFailure(errormsg))
    }
  }
}

function* handleRequestCafeInfo(){
  while(true){
    const action = yield take(types.REQUEST_CAFE)
    const { data, error } = yield call(api.getCafeInfo, action.id)
    if(data && !error){
      yield put(actions.getCafeSuccess(data))
    } else {
      const errormsg = '카페 정보를 받아오지 못했습니다.'
      yield put(actions.getCafeFailure(errormsg))
    }
  }
}


function* handleRequestAllCafeInfo(){
  while(true){
    yield take(types.REQUEST_ALL_CAFES)
    const { data, error } = yield call(api.getAllCafesInfo)
    if(data && !error){
      const cafes = data
      yield put(actions.getAllCafesSuccess(cafes))
    } else {
      const errormsg = '카페 정보를 받아오지 못했습니다.'
      yield put(actions.getAllCafesFailure(errormsg))
    }
  }
}

function* handleRequestConvInfo(){
  while(true){
    const action = yield take(types.REQUEST_CONV)
    const { data, error } = yield call(api.getConvInfo, action.id)
    if(data && !error){
      yield put(actions.getConvSuccess(data))
    } else {
      const errormsg = '편의점 정보를 받아오지 못했습니다.'
      yield put(actions.getConvFailure(errormsg))
    }
  }
}


function* handleRequestAllConvInfo(){
  while(true){
    yield take(types.REQUEST_ALL_CONVES)
    const { data, error } = yield call(api.getAllConvesInfo)
    if(data && !error){
      const conves = data
      yield put(actions.getAllConvesSuccess(conves))
    } else {
      const errormsg = '편의점 정보를 받아오지 못했습니다.'
      yield put(actions.getAllConvesFailure(errormsg))
    }
  }
}

function* handleSave(){
  while(true){
    const action = yield take(types.SAVE_POST)
    const {error} = yield call(api.postWritePost, action.post, action.bldgNo)
    if(error){
      const errormsg = '게시물을 저장하지 못했습니다.'
      alert(errormsg)
    }
    yield put(actions.requestBoard(action.bldgNo))
  }
}

function* handleEdit(){
  while(true){
    const action = yield take(types.EDIT_POST)
    const {error} = yield call(api.postEditPost, action.post)
    if(error){
      const errormsg = '게시물을 수정하지 못했습니다.'
      alert(errormsg)
    }
    yield put(actions.requestPost(action.post.id))
  }
}

function* handleDelete(){
  while(true){
    const action = yield take(types.DELETE_POST)
    let boardNo = action.post.building.code
    const {error} = yield call(api.postDeletePost, action.post)
    if(error){
      const errormsg = '게시물을 삭제하지 못했습니다.'
      alert(errormsg)
    }else{
      alert('삭제되었습니다.')
      historyPush(`/board/${boardNo}`)
    }
    yield put(actions.requestBoard(action.bldgNo))
  }
}

export default function* rootSaga(){
  yield fork(handleRequestBldgInfo)
  yield fork(handleRequestBoardInfo)
  yield fork(handleRequestPostInfo)

  yield fork(handleRequestResInfo)
  yield fork(handleRequestAllResInfo)

  yield fork(handleRequestSemiInfo)
  yield fork(handleRequestBldgSemiInfo)
  yield fork(handleRequestAllSemiInfo)

  yield fork(handleRequestBankInfo)
  yield fork(handleRequestAllBankInfo)

  yield fork(handleRequestATMInfo)
  yield fork(handleRequestAllATMInfo)

  yield fork(handleRequestATMInfo)
  yield fork(handleRequestAllCafeInfo)

  yield fork(handleRequestConvInfo)
  yield fork(handleRequestAllConvInfo)

  yield fork(handleSave)
  yield fork(handleEdit)
  yield fork(handleDelete)
}
