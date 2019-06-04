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
    case types.TOGGLE_RES_MARKER:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CAFE_MARKER:
    case types.TOGGLE_CONV_MARKER:
      return 15
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
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

function showSearchMarker(state = false, action){
  switch(action.type){
    case types.SEARCH:
      return true
    case types.HIDE_MARKERS:
      return false
    default:
      return state
  }
}

function showResMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_RES_MARKER:
      return !state
    case types.GET_ALL_RESTAURANTS_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CAFE_MARKER:
    case types.TOGGLE_CONV_MARKER:
      return false
    default:
      return state
  }
}

function showBankMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_BANK_MARKER:
      return !state
    case types.GET_ALL_BANKS_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_RES_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CAFE_MARKER:
    case types.TOGGLE_CONV_MARKER:
      return false
    default:
      return state
  }
}

function showATMMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_ATM_MARKER:
      return !state
    case types.GET_ALL_ATMS_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_RES_MARKER:
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_CAFE_MARKER:
    case types.TOGGLE_CONV_MARKER:
      return false
    default:
      return state
  }
}

function showCafeMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_CAFE_MARKER:
      return !state
    case types.GET_ALL_CAFES_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_RES_MARKER:
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CONV_MARKER:
      return false
    default:
      return state
  }
}

function showConvMarkers(state = false, action){
  switch(action.type){
    case types.TOGGLE_CONV_MARKER:
      return !state
    case types.GET_ALL_CONVES_FAILURE:
    case types.HIDE_MARKERS:
    case types.TOGGLE_SEMI_MARKER:
    case types.TOGGLE_RES_MARKER:
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CAFE_MARKER:
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
    case types.TOGGLE_BANK_MARKER:
    case types.TOGGLE_ATM_MARKER:
    case types.TOGGLE_CAFE_MARKER:
    case types.TOGGLE_CONV_MARKER:
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
    case types.HIDE_WRITE_POST:
    case types.SAVE_POST_SUCCESS:
    case types.EDIT_POST_SUCCESS:
      return false
    default:
      return state 
  }
}

function selectedBoardBldgNo(state = "0", action){
  switch(action.type){
    case types.GET_BOARD_SUCCESS:
    case types.GET_BUILDING_SUCCESS:
    case types.SHOW_WRITE_POST:
      return action.bldgNo
    case types.REFRESH_DATA:
      return "0"
    default:
      return state
  }
}

function selectedPostList(state = [], action){
  switch(action.type){
    case types.GET_BOARD_SUCCESS:
      return action.posts
    case types.REFRESH_DATA:
      return []
    default:
      return state
  }
}

function selectedPost(state = {}, action){
  switch(action.type){
    case types.GET_POST_SUCCESS:
      return action.post
    case types.REFRESH_DATA:
      return {}
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

function showPasswordCheck(state = false, action){
  switch(action.type){
    case types.SHOW_PASSWORD_CHECK:
      return true
    case types.HIDE_PASSWORD_CHECK:
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_COMMENT_SUCCESS:
      return false
    default:
      return state
  }
}

function showEditComment(state = false, action){
  switch(action.type){
    case types.SHOW_EDIT_COMMENT:
      return true
    case types.HIDE_EDIT_COMMENT:
    case types.EDIT_COMMENT_SUCCESS:
      return false
    default:
      return state
  }
}

function editingComment(state = {}, action){
  switch(action.type){
    case types.SHOW_EDIT_COMMENT:
      return action.comment
    case types.EDIT_COMMENT_SUCCESS:
      return {}
    default:
      return state
  }
}

function deleteTarget(state = {}, action){
  switch(action.type){
    case types.SHOW_PASSWORD_CHECK:
      return action.target
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_COMMENT_SUCCESS:
      return {}
    default:
      return state
  }
}

function activeBoardPage(state = 1, action) {
  switch(action.type){
    case types.CHANGE_BOARD_PAGE:
      return action.page
    case types.GET_BOARD_SUCCESS:
      return 1
    default:
      return state
  }
}
/******** Bank ********/

function allBanks(state = [], action){
  switch(action.type){
    case types.GET_ALL_BANKS_SUCCESS:
      return action.banks
    default:
      return state
  }
}

function selectedBank(state = {}, action){
  switch(action.type){
    case types.GET_BANK_SUCCESS:
      return action.bank
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

/******** ATM ********/

function allATMs(state = [], action){
  switch(action.type){
    case types.GET_ALL_ATMS_SUCCESS:
      return action.atms
    default:
      return state
  }
}

function selectedATM(state = {}, action){
  switch(action.type){
    case types.GET_ATM_SUCCESS:
      return action.atm
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

/******** Cafe ********/

function allCafes(state = [], action){
  switch(action.type){
    case types.GET_ALL_CAFES_SUCCESS:
      return action.cafes
    default:
      return state
  }
}

function selectedCafe(state = {}, action){
  switch(action.type){
    case types.GET_CAFE_SUCCESS:
      return action.cafe
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

/******** Convenient Store ********/

function allConves(state = [], action){
  switch(action.type){
    case types.GET_ALL_CONVES_SUCCESS:
      return action.conves
    default:
      return state
  }
}

function selectedConv(state = {}, action){
  switch(action.type){
    case types.GET_CONV_SUCCESS:
      return action.conv
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

/******** Restaurant ********/

function selectedRes(state = {}, action){
  switch(action.type){
    case types.GET_RESTAURANT_SUCCESS:
      return action.restaurant
    case types.REFRESH_DATA:
      return {}
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
    case types.REFRESH_DATA:
      return {}
    default:
      return state
  }
}

function selectedSemiList(state = [], action){
  switch(action.type){
    case types.GET_BLDG_SEMINARS_SUCCESS:
      return action.seminars
    case types.REFRESH_DATA:
      return []
    default:
      return state
  }
}

function selectedSemiListBldgNo(state = "0", action){
  switch(action.type){
    case types.GET_BLDG_SEMINARS_SUCCESS:
      return action.bldgNo
    case types.REFRESH_DATA:
      return "0"
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
    case types.SAVE_POST_FAILURE:
    case types.EDIT_POST_FAILURE:
    case types.DELETE_POST_FAILURE:
    case types.POST_LIKE_FAILURE:
    case types.SAVE_COMMENT_FAILURE:
    case types.EDIT_COMMENT_FAILURE:
    case types.DELETE_COMMENT_FAILURE:
      return action.error
    default:
      return ""
  }
}

function message(state = "", action){
  switch(action.type){
    case types.DELETE_POST_SUCCESS:
    case types.DELETE_COMMENT_SUCCESS:
      return "삭제되었습니다."
    case types.EDIT_POST_SUCCESS:
    case types.EDIT_COMMENT_SUCCESS:
      return "수정되었습니다."
    case types.WRONG_PASSWORD:
      return "비밀번호가 올바르지 않습니다."
    default:
      return ""
  }
}

const reducers = combineReducers({

  currentPos, zoom, selectedBldg, showSearchMarker, showResMarkers,
  showSemiMarkers, searchedBldg, showBankMarkers, showATMMarkers, showCafeMarkers,
  showConvMarkers,// Map

  showSideBar, // SideBar
  searchingBldg, // SearchBar

  showWritePostModal, selectedBoardBldgNo, selectedPostList, selectedPost,
  isEdit, showPasswordCheck, activeBoardPage, showEditComment, editingComment, deleteTarget, // Post

  allBanks,selectedBank, // Bank
  allATMs, selectedATM, // ATM
  allCafes, selectedCafe, // Cafe
  allConves, selectedConv,  // Convenient Store
  selectedRes, allRestaurants, // Restaurant

  selectedSemi, selectedSemiList, selectedSemiListBldgNo,
  activeSemiPage, allSeminars, // Seminar

  error, message // App

});

export default reducers
