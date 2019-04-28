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

export function zoomChanged(zoomLevel){
  return {
    type: types.ZOOM_CHANGED,
    zoomLevel
  }
}
