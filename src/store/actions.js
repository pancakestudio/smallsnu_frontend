import * as types from './actionTypes';

export function buildingClick(bldgNo, curPos){
  return{
    type: types.BUILDING_CLICK,
    bldgNo,
    curPos
  };
}

export function modalHide(){
  return{
    type: types.MODAL_HIDE,
  };
}

export function searchValueChange(bldgNo){
  return{
    type: types.SEARCH_VALUE_CHANGE,
    bldgNo
  };
}

export function search(bldgNo, bldgPos){
  return{
    type: types.SEARCH,
    bldgNo,
    bldgPos
  }
}

export function zoomChanged(zoomLevel){
  return {
    type: types.ZOOM_CHANGED,
    zoomLevel
  }
}
