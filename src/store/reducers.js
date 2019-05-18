import { combineReducers } from 'redux';
import { getBldgCoord } from '../utils/Functions'
import * as types from './actionTypes'


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

function searchingBldg(state = "0", action){
  switch(action.type){
    case types.SEARCH_VALUE_CHANGE:
      return action.bldgNo
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
      return true
    case types.MODAL_HIDE:
      return false
    default:
      return state
  }
}

function showResModal(state = false, action){
  switch(action.type){
    case types.MAP_RESTAURANT_CLICK:
      return true
    case types.MODAL_HIDE:
      return false
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

function showSearchMarker(state = false, action){
  switch(action.type){
    case types.SEARCH:
      return true
    default:
      return false
  }
}

function showSideResMarker(state = false, action){
  switch(action.type){
    case types.SIDE_RESTAURANT_CLICK:
      return !state
    case types.ZOOM_CHANGED:
    case types.MAP_RESTAURANT_CLICK:
    case types.MODAL_HIDE:
    case types.GET_RESTAURANT_SUCCESS:
    default:
      return state
  }
}

function sideResInfo(state = null, action){
  switch(action.type){
    case types.GET_RESTAURANT_SUCCESS:
      return action.resInfo
    default :
      return state
  }
}

function sideResToggle(state = false, action){
  switch(action.type){
    case types.SIDE_RESTAURANT_CLICK:
      return !state
    default :
      return state
  }
}

function mapResInfo(state = null, action){
  switch(action.type){
    case types.MAP_RESTAURANT_CLICK:
      return action.resInfo
    default:
      return state
  }
}

function error(state = "", action){
  switch(action.type){
    case types.GET_BUILDING_FAILURE:
      return action.error
    case types.GET_RESTAURANT_FAILURE:
      return action.error
    default:
      return ""
  }
}

const reducers = combineReducers({
  currentPos,
  searchingBldg,
  selectedBldg,
  showBldgModal,
  showResModal,
  zoom,
  showSearchMarker,
  showSideResMarker,
  sideResInfo,
  sideResToggle,
  mapResInfo,
  error
});

export default reducers;
