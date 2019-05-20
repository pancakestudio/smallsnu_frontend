import { combineReducers } from 'redux';
import * as types from './actionTypes'

/******** Map ********/

function currentPos(state = {lat: 37.459, lng: 126.952}, action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return action.curPos
    case types.SEARCH:
      return action.bldgPos
    default:
      return state
  }
}

function zoom(state = 17, action) {
  switch(action.type){
    case types.ZOOM_CHANGED:
      return action.zoomLevel
    default:
      return state
  }
}

function selectedBldg(state = {bldgNo: "0"}, action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return {bldgNo: action.bldgNo}
    case types.SEARCH:
      return {bldgNo: action.bldgNo}
    case types.GET_BUILDING_SUCCESS:
      return Object.assign({}, state, {
        info: action.info,
        restaurants: action.restaurants,
        seminars: action.seminars,
        posts: action.posts
      })
    default:
      return state
  }
}

function showBldgModal(state = false, action){
  switch(action.type){
    case types.GET_BUILDING_SUCCESS:
    case types.SHOW_BUILDING:
      return true
    default:
      return false
  }
}

function showSearchMarker(state = false, action){
  switch(action.type){
    case types.SEARCH:
      return true
    default:
      return false
  }
}

function showResMarkers(state = false, action){
  switch(action.type){
    case types.SIDE_RESTAURANT_CLICK:
      return !state
    case types.GET_RESTAURANT_FAILURE:
    case types.HIDE_MARKERS:
    case types.SIDE_SEMINAR_CLICK:
      return false
    default:
      return state
  }
}

function showSemiMarkers(state = false, action){
  switch(action.type){
    case types.SIDE_SEMINAR_CLICK:
      return !state
    case types.GET_SEMINAR_FAILURE:
    case types.HIDE_MARKERS:
    case types.SIDE_RESTAURANT_CLICK:
      return false
    default:
      return state
  }
}

/******** SearchBar ********/

function searchingBldg(state = "0", action){
  switch(action.type){
    case types.SEARCH_VALUE_CHANGE:
      return action.bldgNo
    default:
      return state
  }
}
/******** PostList ********/

function showPostBoardModal(state = false, action){
  switch(action.type){
    case types.SHOW_POST_LIST:
      return true
    default:
      return false
  }
}

function selectedPostList(state = [{}], action){
  switch(action.type){
    case types.SHOW_POST_LIST:
    case types.GET_BUILDING_SUCCESS:
      return action.posts
    default:
      return state
  }
}

/******** Post ********/

function selectedPost(state = {}, action){
  switch(action.type){
    case types.SHOW_POST:
      return action.post
    default:
      return state
  }
}

function showPostModal(state = false, action){
  switch(action.type){
    case types.SHOW_POST:
      return true
    default:
      return false
  }
}

/******** Restaurant ********/

function selectedRes(state = null, action){
  switch(action.type){
    case types.SHOW_RESTAURANT:
      return action.resInfo
    default:
      return state
  }
}

function showResModal(state = false, action){
  switch(action.type){
    case types.SHOW_RESTAURANT:
      return true
    case types.MODAL_HIDE:
      return false
    default:
      return state
  }
}

function restaurantList(state = [], action){
  switch(action.type){
    case types.GET_RESTAURANT_SUCCESS:
      return action.resInfo
    default:
      return state
  }
}

/******** Seminar ********/

function selectedSemi(state = {}, action){
  switch(action.type){
    case types.SHOW_SEMINAR:
      return action.seminar
    default:
      return state
  }
}

function selectedSemiList(state = [], action){
  switch(action.type){
    case types.SHOW_SEMINAR_LIST:
      return action.seminars
    default:
      return state
  }
}

function showSemiModal(state = false, action){
  switch(action.type){
    case types.SHOW_SEMINAR:
      return true
    default:
      return false
  }
}

function showSemiListModal(state = false, action){
  switch(action.type){
    case types.SHOW_SEMINAR_LIST:
    case types.CHANGE_SEMINAR_PAGE:
      return true
    default:
      return false
  }
}

function activeSemiPage(state = 1, action) {
  switch(action.type){
    case types.CHANGE_SEMINAR_PAGE:
      return action.page
    case types.SHOW_SEMINAR_LIST:
      return 1
    default:
      return state
  }
}


function seminarList(state = [], action) {
  switch(action.type){
    case types.GET_SEMINAR_SUCCESS:
      return action.seminars
    default:
      return state
  }
}

/******** App ********/

function error(state = "", action){
  switch(action.type){
    case types.GET_BUILDING_FAILURE:
    case types.GET_SEMINAR_FAILURE:
      return action.error
    case types.GET_RESTAURANT_FAILURE:
      return action.error
    default:
      return ""
  }
}

const reducers = combineReducers({
  currentPos, zoom, selectedBldg, showBldgModal, showSearchMarker, showResMarkers, showSemiMarkers, // Map
  searchingBldg, // SearchBar
  // WritePost
  selectedPostList, showPostBoardModal, // PostList
  selectedPost, showPostModal, // Post
  selectedRes, showResModal, restaurantList, // Restaurant
  selectedSemi, selectedSemiList, showSemiModal, showSemiListModal, activeSemiPage, seminarList, // Seminar
  error // App
});

export default reducers
