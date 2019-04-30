import { combineReducers } from 'redux';
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

function selectedBldg(state = "0", action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return action.bldgNo
    case types.SEARCH:
      return action.bldgNo
    default:
      return state
  }
}

function showBldgModal(state = false, action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return true
    case types.SEARCH:
      return false
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

function showMarker(state = false, action){
  switch(action.type){
    case types.SEARCH:
      return true
    default:
      return false
  }
}

const reducers = combineReducers({
  currentPos,
  searchingBldg,
  selectedBldg,
  showBldgModal,
  zoom,
  showMarker
});

export default reducers;
