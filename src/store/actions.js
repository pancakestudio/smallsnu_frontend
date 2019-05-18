import * as types from './actionTypes';

export function buildingClick(bldgNo, curPos){
  return{
    type: types.BUILDING_CLICK,
    bldgNo,
    curPos
  };
}

export function sideResClick(){
  return{
    type: types.SIDE_RESTAURANT_CLICK,
  }
}

export function mapResClick(resInfo){
  return{
    type: types.MAP_RESTAURANT_CLICK,
    resInfo,
  }
}

export function getBuildingSuccess(info, restaurants, seminars, lectures, posts){
  return{
    type: types.GET_BUILDING_SUCCESS,
    info,
    restaurants,
    seminars,
    lectures,
    posts,
  }
}

export function getBuildingFailure(error){
  return{
    type: types.GET_BUILDING_FAILURE,
    error
  }
}

export function getRestaurantSucess(resInfo){
  return{
    type : types.GET_RESTAURANT_SUCCESS,
    resInfo,
  }
}

export function getRestaurantFailure(error){
  return{
    type: types.GET_RESTAURANT_FAILURE,
    error
  }
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
