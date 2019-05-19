import * as types from './actionTypes'

/******** Map ********/

export function buildingClick(bldgNo, curPos){
  return{
    type: types.BUILDING_CLICK,
    bldgNo,
    curPos
  };
}


export function zoomChanged(zoomLevel){
  return {
    type: types.ZOOM_CHANGED,
    zoomLevel
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

export function hideMarkers(){
  return {
    type: types.HIDE_MARKERS
  }
}

/******** SearchBar ********/

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

/******** Modal ********/

export function modalHide(){
  return{
    type: types.MODAL_HIDE,
  };
}

/******** Post ********/

export function showPost(post){
  return {
    type: types.SHOW_POST,
    post
  }
}

export function showPostList(posts){
  return {
    type: types.SHOW_POST_LIST,
    posts
  }
}

/******** Restaurant ********/

export function sideResClick(){
  return{
    type: types.SIDE_RESTAURANT_CLICK,
  }
}

export function showRestaurant(resInfo){
  return{
    type: types.SHOW_RESTAURANT,
    resInfo,
  }
}

export function getRestaurantSuccess(resInfo){
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

/******** Seminar ********/

export function showSeminar(seminar){
  return {
    type: types.SHOW_SEMINAR,
    seminar
  }
}

export function showSeminarList(seminars){
  return {
    type: types.SHOW_SEMINAR_LIST,
    seminars
  }
}

export function changeSeminarPage(page){
  return {
    type: types.CHANGE_SEMINAR_PAGE,
    page
  }
}

export function sideSeminarClick(){
  return {
    type: types.SIDE_SEMINAR_CLICK
  }
}

export function getSeminarSuccess(seminars){
  return {
    type: types.GET_SEMINAR_SUCCESS,
    seminars
  }
}

export function getSeminarFailure(error){
  return {
    type: types.GET_SEMINAR_FAILURE,
    error
  }
}
