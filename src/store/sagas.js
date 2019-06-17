import { put, call, take, fork } from 'redux-saga/effects';
import * as actions from './actions'
import * as types from './actionTypes'
import * as api from '../services/api'
import * as reducers from './reducers'
import * as ShuttleStation from '../utils/ShuttleStation'
import * as RevShuttleStation from '../utils/RevShuttleStation'
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

function * handleRequestShuttleInfo(){
  while(true){
    const action = yield take(types.REQUEST_SHUTTLE)
  }
}

function * handleRequestAllShuttleInfo(){
  while(true){
    const action = yield take(types.REQUEST_ALL_SHUTTLE)
    const stations = ShuttleStation.default;
    yield put(actions.getAllShuttleSuccess(stations))
  }
}

function * handleRequestAllRevShuttleInfo(){
  while(true){
    const action = yield take(types.REQUEST_ALL_REV_SHUTTLE)
    const stations = RevShuttleStation.default;
    console.log(stations)
    yield put(actions.getAllRevShuttleSuccess(stations))
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

function* handleSavePost(){
  while(true){
    const action = yield take(types.SAVE_POST)
    const {error} = yield call(api.postWritePost, action.post, action.bldgNo)
    if(error){
      const errormsg = '게시물을 저장하지 못했습니다.'
      yield put(actions.savePostFailure(errormsg))
    } else {
      yield put(actions.savePostSuccess(action.bldgNo))
    }
  }
}

function* handleSavePostSuccess(){
  while(true){
    const action = yield take(types.SAVE_POST_SUCCESS)
    yield put(actions.requestBoard(action.bldgNo))
  }
}

function* handleEditPost(){
  while(true){
    const action = yield take(types.EDIT_POST)
    const {error} = yield call(api.postEditPost, action.post)
    if(error){
      if(error.response.status===400){
        yield put(actions.wrongPassword())
      } else {
        const errormsg = '게시물을 수정하지 못했습니다.'
        yield put(actions.editPostFailure(errormsg))
      }
    } else {
      yield put(actions.editPostSuccess(action.post.id))
    }
  }
}

function* handleEditPostSuccess(){
  while(true){
    const action = yield take(types.EDIT_POST_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

function* handleDeletePost(){
  while(true){
    const action = yield take(types.DELETE_POST)
    const {error} = yield call(api.postDeletePost, action.post, action.password)
    if(error){
      if(error.response.status===400){
        yield put(actions.wrongPassword())
      } else {
        const errormsg = '게시물을 삭제하지 못했습니다.'
        yield put(actions.deletePostFailure(errormsg))
      }
    }else{
      historyPush(`/board/${action.bldgNo}`)
      yield put(actions.deletePostSuccess(action.bldgNo))
    }
  }
}

function* handleDeletePostSuccess(){
  while(true){
    const action = yield take(types.DELETE_POST_SUCCESS)
    yield put(actions.requestBoard(action.bldgNo))
  }
}

function* handlePostLike() {
  while(true){
    const action = yield take(types.POST_LIKE)
    const { error } = yield call(api.postPostLike, action.postId)
    if(error){
      const errormsg = '추천을 하지 못했습니다.'
      yield put(actions.postLikeFailure(errormsg))
    } else {
      yield put(actions.postLikeSuccess(action.postId))
    }
  }
}

function* handlePostLikeSuccess(){
  while(true){
    const action = yield take(types.POST_LIKE_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

function* handleSaveComment() {
  while(true){
    const action = yield take(types.SAVE_COMMENT)
    const { error } = yield call(api.postComment, action.comment, action.postId)
    if(error){
      const errormsg = '댓글을 등록하지 못했습니다.'
      yield put(actions.saveCommentFailure(errormsg))
    } else {
      yield put(actions.saveCommentSuccess(action.postId))
    }
  }
}

function* handleSaveCommentSuccess(){
  while(true){
    const action = yield take(types.SAVE_COMMENT_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

function* handleEditComment(){
  while(true){
    const action = yield take(types.EDIT_COMMENT)
    const {error} = yield call(api.postEditComment, action.comment)
    if(error){
      if(error.response.status===400){
        yield put(actions.wrongPassword())
      } else {
        const errormsg = '댓글을 수정하지 못했습니다.'
        yield put(actions.editCommentFailure(errormsg))
      }
    }else{
      yield put(actions.editCommentSuccess(action.postId))
    }
  }
}

function* handleEditCommentSuccess(){
  while(true){
    const action = yield take(types.EDIT_COMMENT_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

function* handleDeleteComment(){
  while(true){
    const action = yield take(types.DELETE_COMMENT)
    const {error} = yield call(api.deleteComment, action.comment, action.password)
    if(error){
      if(error.response.status===400){
        yield put(actions.wrongPassword())
      } else {
        const errormsg = '댓글을 삭제하지 못했습니다.'
        yield put(actions.deleteCommentFailure(errormsg))
      }
    }else{
      yield put(actions.deleteCommentSuccess(action.postId))
    }
  }
}

function* handleDeleteCommentSuccess(){
  while(true){
    const action = yield take(types.DELETE_COMMENT_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

function* handleCommentLike() {
  while(true){
    const action = yield take(types.COMMENT_LIKE)
    const { error } = yield call(api.postCommentLike, action.commentId)
    if(error){
      const errormsg = '댓글 추천을 하지 못했습니다.'
      yield put(actions.commentLikeFailure(errormsg))
    } else {
      yield put(actions.commentLikeSuccess(action.postId))
    }
  }
}

function* handleCommentLikeSuccess(){
  while(true){
    const action = yield take(types.COMMENT_LIKE_SUCCESS)
    yield put(actions.requestPost(action.postId))
  }
}

export default function* rootSaga(){
  yield fork(handleRequestBldgInfo)
  yield fork(handleRequestBoardInfo)
  yield fork(handleRequestPostInfo)

  yield fork(handleRequestResInfo)
  yield fork(handleRequestAllResInfo)

  yield fork(handleRequestShuttleInfo)
  yield fork(handleRequestAllShuttleInfo)
  yield fork(handleRequestAllRevShuttleInfo)

  yield fork(handleRequestSemiInfo)
  yield fork(handleRequestBldgSemiInfo)
  yield fork(handleRequestAllSemiInfo)

  yield fork(handleRequestBankInfo)
  yield fork(handleRequestAllBankInfo)

  yield fork(handleRequestATMInfo)
  yield fork(handleRequestAllATMInfo)

  yield fork(handleRequestCafeInfo)
  yield fork(handleRequestAllCafeInfo)

  yield fork(handleRequestConvInfo)
  yield fork(handleRequestAllConvInfo)

  yield fork(handleSavePost); yield fork(handleSavePostSuccess)
  yield fork(handleEditPost); yield fork(handleEditPostSuccess)
  yield fork(handleDeletePost); yield fork(handleDeletePostSuccess)
  yield fork(handlePostLike); yield fork(handlePostLikeSuccess)
  yield fork(handleSaveComment); yield fork(handleSaveCommentSuccess)
  yield fork(handleEditComment); yield fork(handleEditCommentSuccess)
  yield fork(handleDeleteComment); yield fork(handleDeleteCommentSuccess)
  yield fork(handleCommentLike); yield fork(handleCommentLikeSuccess)
}
