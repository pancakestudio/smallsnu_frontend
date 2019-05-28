import { combineReducers } from 'redux';
import * as types from './actionTypes'

/******** Map ********/

function currentPos(state = {lat: 37.459, lng: 126.952}, action){
  switch(action.type){
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

function selectedBldg(state = {}, action){
  switch(action.type){
    case types.GET_BUILDING_SUCCESS:
      return Object.assign({}, state, {
        krName: action.krName,
        bldgNo: action.bldgNo,
        info: action.info,
        restaurants: action.restaurants,
        seminars: action.seminars,
        posts: action.posts
      })
    case types.GET_BOARD_SUCCESS:
      return Object.assign({}, state, {
        posts: action.posts
      })
    default:
      return state
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
    case types.TOGGLE_RES_MARKER:
      return !state
    case types.GET_ALL_RESTAURANTS_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
      return false
    default:
      return state
  }
}

function showSemiMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_SEMI_MARKER:
      return !state
    case types.GET_ALL_SEMINARS_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_RES_MARKER:
      return false
    default:
      return state
  }
}

function searchedBldg(state = "0", action){
  switch(action.type){
    case types.SEARCH:
      return action.bldgNo
    default:
      return state
  }
}

/******** SideBar ********/

function showSideBar(state = false, action){
  switch(action.type){
    case types.TOGGLE_SIDE_BAR:
      return !state
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


/******** Post ********/

function showWritePostModal(state = false, action){
  switch(action.type){
    case types.SHOW_WRITE_POST:
      return true
    default:
      return false
  }
}

function selectedBoardBldgNo(state = "0", action){
  switch(action.type){
    case types.GET_BOARD_SUCCESS:
    case types.GET_BUILDING_SUCCESS:
      return action.bldgNo
    default:
      return state
  }
}

function selectedPostList(state = [], action){
  switch(action.type){
    case types.GET_BOARD_SUCCESS:
      return action.posts
    default:
      return state
  }
}

function selectedPost(state = {}, action){
  switch(action.type){
    case types.GET_POST_SUCCESS:
      return action.post
    default:
      return state
  }
}

function isEdit(state = false, action){
  switch(action.type){
    case types.EDIT_POST_FLAG:
      return true
    case types.GET_BOARD_SUCCESS:
      return false
    default:
      return state
  }
}

function postPW(state = "", action){
  switch(action.type){
    case types.POST_PW_CHECK:
      return action.password
    case types.GET_BOARD_SUCCESS:
      return ""
    default:
      return state
  }
}

function showPostPWCheck(state = false, action){
  switch(action.type){
    case types.SHOW_POST_PW_CHECK:
      return true
    default:
      return false
  }
}
/******** Restaurant ********/

function selectedRes(state = {}, action){
  switch(action.type){
    case types.GET_RESTAURANT_SUCCESS:
      return action.restaurant
    default:
      return state
  }
}

function allRestaurants(state = [], action){
  switch(action.type){
    case types.GET_ALL_RESTAURANTS_SUCCESS:
      return action.restaurants
    default:
      return state
  }
}

/******** Seminar ********/

function selectedSemi(state = {}, action){
  switch(action.type){
    case types.GET_SEMINAR_SUCCESS:
      return action.seminar
    default:
      return state
  }
}

function selectedSemiList(state = [], action){
  switch(action.type){
    case types.GET_BLDG_SEMINARS_SUCCESS:
      return action.seminars
    default:
      return state
  }
}

function selectedSemiListBldgNo(state = "0", action){
  switch(action.type){
    case types.GET_BLDG_SEMINARS_SUCCESS:
      return action.bldgNo
    default:
      return state
  }
}

function activeSemiPage(state = 1, action) {
  switch(action.type){
    case types.CHANGE_SEMINAR_PAGE:
      return action.page
    case types.GET_BLDG_SEMINARS_SUCCESS:
      return 1
    default:
      return state
  }
}


function allSeminars(state = [], action) {
  switch(action.type){
    case types.GET_ALL_SEMINARS_SUCCESS:
      return action.seminars
    default:
      return state
  }
}

/******** App ********/

function error(state = "", action){
  switch(action.type){
    case types.GET_BUILDING_FAILURE:
    case types.GET_BOARD_FAILURE:
    case types.GET_POST_FAILURE:
    case types.GET_RESTAURANT_FAILURE:
    case types.GET_ALL_RESTAURANTS_FAILURE:
    case types.GET_SEMINAR_FAILURE:
    case types.GET_BLDG_SEMINARS_FAILURE:
    case types.GET_ALL_SEMINARS_FAILURE:
      return action.error
    default:
      return ""
  }
}

const reducers = combineReducers({
  currentPos, zoom, selectedBldg, showSearchMarker, showResMarkers, showSemiMarkers, searchedBldg, // Map
  showSideBar, // SideBar
  searchingBldg, // SearchBar
  showWritePostModal, selectedBoardBldgNo, selectedPostList, selectedPost, isEdit, postPW, showPostPWCheck, // Post
  selectedRes, allRestaurants, // Restaurant
  selectedSemi, selectedSemiList, selectedSemiListBldgNo, activeSemiPage, allSeminars, // Seminar
  error // App
});

export default reducers
