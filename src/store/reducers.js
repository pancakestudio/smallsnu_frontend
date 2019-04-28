import { combineReducers } from 'redux';
import * as types from './actionTypes'

function currentPos(state = {lat: 37.459, lng: 126.952}, action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return action.curPos
    default:
      return state
  }
}

function selectedBldg(state = "0", action){
  switch(action.type){
    case types.BUILDING_CLICK:
      return action.bldgNo
    default:
      return state
  }
}

function showBldgModal(state = false, action){
  switch(action.type){
    case types.BUILDING_CLICK:
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

const reducers = combineReducers({
  currentPos,
  selectedBldg,
  showBldgModal,
  zoom
});

export default reducers;
  console.log(currentPos)
