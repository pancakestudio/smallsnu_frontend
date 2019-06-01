import * as types from './actionTypes'

/******** Map ********/

export function requestBuilding(bldgNo){
  return{
    type: types.REQUEST_BUILDING,
    bldgNo
  };
}

export function getBuildingSuccess(krName, bldgNo, info, restaurants, seminars, lectures, posts){
  return{
    type: types.GET_BUILDING_SUCCESS,
    krName,
    bldgNo,
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

export function zoomChanged(zoomLevel){
  return {
    type: types.ZOOM_CHANGED,
    zoomLevel
  }
}

export function hideMarkers(){
  return {
    type: types.HIDE_MARKERS
  }
}

/******** SideBar ********/

export function toggleSideBar(){
  return {
    type: types.TOGGLE_SIDE_BAR
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

/******** Post ********/

export function requestBoard(bldgNo){
  return {
    type: types.REQUEST_BOARD,
    bldgNo
  }
}

export function getBoardSuccess(posts, bldgNo){
  return {
    type: types.GET_BOARD_SUCCESS,
    posts,
    bldgNo
  }
}

export function getBoardFailure(error){
  return {
    type: types.GET_BOARD_FAILURE,
    error
  }
}

export function requestPost(id) {
  return {
    type: types.REQUEST_POST,
    id
  }
}

export function getPostSuccess(post){
  return {
    type: types.GET_POST_SUCCESS,
    post
  }
}

export function getPostFailure(error){
  return {
    type: types.GET_POST_FAILURE,
    error
  }
}

export function deletePost(post, bldgNo){
  return{
    type: types.DELETE_POST,
    post,
    bldgNo,
  }
}

export function savePost(post, bldgNo){
  return{
    type: types.SAVE_POST,
    post,
    bldgNo
  }
}

export function editPost(post, bldgNo){
  return{
    type: types.EDIT_POST,
    post,
    bldgNo
  }
}

export function editPostFlag(){
  return{
    type: types.EDIT_POST_FLAG,
  }
}

export function showWritePost() {
  return{
    type: types.SHOW_WRITE_POST,
  };
}

export function showPostPWCheck(){
  return{
    type: types.SHOW_POST_PW_CHECK
  }
}

export function hidePostPWCheck(){
  return{
    type: types.HIDE_POST_PW_CHECK
  }
}

export function postPWCheck(password) {
  return{
    type: types.POST_PW_CHECK,
    password
  }
}

export function changeBoardPage(page){
  return {
    type: types.CHANGE_BOARD_PAGE,
    page
  }
}

/******** Restaurant ********/

export function toggleResMarker(){
  return{
    type: types.TOGGLE_RES_MARKER,
  }
}

export function requestRestaurant(id){
  return{
    type: types.REQUEST_RESTAURANT,
    id
  }
}

export function getRestaurantSuccess(restaurant){
  return{
    type : types.GET_RESTAURANT_SUCCESS,
    restaurant,
  }
}

export function getRestaurantFailure(error){
  return{
    type: types.GET_RESTAURANT_FAILURE,
    error
  }
}

export function requestAllRestaurants(){
  return{
    type: types.REQUEST_ALL_RESTAURANTS,
  }
}


export function getAllRestaurantsSuccess(restaurants){
  return{
    type : types.GET_ALL_RESTAURANTS_SUCCESS,
    restaurants,
  }
}

export function getAllRestaurantsFailure(error){
  return{
    type: types.GET_ALL_RESTAURANTS_FAILURE,
    error
  }
}

/******** Seminar ********/

export function toggleSemiMarker(){
  return{
    type: types.TOGGLE_SEMI_MARKER,
  }
}

export function changeSeminarPage(page){
  return {
    type: types.CHANGE_SEMINAR_PAGE,
    page
  }
}

export function requestSeminar(id){
  return {
    type: types.REQUEST_SEMINAR,
    id
  }
}

export function getSeminarSuccess(seminar){
  return {
    type: types.GET_SEMINAR_SUCCESS,
    seminar
  }
}

export function getSeminarFailure(error){
  return {
    type: types.GET_SEMINAR_FAILURE,
    error
  }
}

export function requestBldgSeminars(bldgNo){
  return {
    type: types.REQUEST_BLDG_SEMINARS,
    bldgNo
  }
}

export function getBldgSeminarsSuccess(seminars, bldgNo){
  return {
    type: types.GET_BLDG_SEMINARS_SUCCESS,
    seminars,
    bldgNo
  }
}

export function getBldgSeminarsFailure(error){
  return {
    type: types.GET_BLDG_SEMINARS_FAILURE,
    error
  }
}

export function requestAllSeminars(){
  return {
    type: types.REQUEST_ALL_SEMINARS,
  }
}

export function getAllSeminarsSuccess(seminars){
  return {
    type: types.GET_ALL_SEMINARS_SUCCESS,
    seminars
  }
}

export function getAllSeminarsFailure(error){
  return {
    type: types.GET_ALL_SEMINARS_FAILURE,
    error
  }
}

/******** Bank ********/

export function toggleBankMarker(){
  return{
    type: types.TOGGLE_BANK_MARKER,
  }
}

export function requestAllBanks(){
  return{
    type: types.REQUEST_ALL_BANKS,
  }
}

export function getAllBanksSuccess(banks){
  return{
    type: types.GET_ALL_BANKS_SUCCESS,
    banks,
  }
}

export function getAllBanksFailure(error){
  return{
    type: types.GET_ALL_BANKS_FAILURE,
    error,
  }
}

export function requestBank(id){
  return{
    type: types.REQUEST_BANK,
    id
  }
}

export function getBankSuccess(bank){
  return{
    type: types.GET_BANK_SUCCESS,
    bank
  }
}

export function getBankFailure(error){
  return{
    type: types.GET_BANK_FAILURE,
    error
  }
}


/******** ATM ********/

export function toggleATMMarker(){
  return{
    type: types.TOGGLE_ATM_MARKER,
  }
}

export function requestAllATMs(){
  return{
    type: types.REQUEST_ALL_ATMS,
  }
}

export function getAllATMsSuccess(atms){
  return{
    type: types.GET_ALL_ATMS_SUCCESS,
    atms,
  }
}

export function getAllATMsFailure(error){
  return{
    type: types.GET_ALL_ATMS_FAILURE,
    error,
  }
}

export function requestATM(id){
  return{
    type: types.REQUEST_ATM,
    id
  }
}

export function getATMSuccess(atm){
  return{
    type: types.GET_ATM_SUCCESS,
    atm
  }
}

export function getATMFailure(error){
  return{
    type: types.GET_ATM_FAILURE,
    error
  }
}

/******** Cafe ********/

export function toggleCafeMarker(){
  return{
    type: types.TOGGLE_CAFE_MARKER,
  }
}

export function requestAllCafes(){
  return{
    type: types.REQUEST_ALL_CAFES,
  }
}

export function getAllCafesSuccess(cafes){
  return{
    type: types.GET_ALL_CAFES_SUCCESS,
    cafes,
  }
}

export function getAllCafesFailure(error){
  return{
    type: types.GET_ALL_CAFES_FAILURE,
    error,
  }
}

export function requestCafe(id){
  return{
    type: types.REQUEST_CAFE,
    id
  }
}

export function getCafeSuccess(cafe){
  return{
    type: types.GET_CAFE_SUCCESS,
    cafe
  }
}

export function getCafeFailure(error){
  return{
    type: types.GET_CAFE_FAILURE,
    error
  }
}


/******** Conv ********/

export function toggleConvMarker(){
  return{
    type: types.TOGGLE_CONV_MARKER,
  }
}

export function requestAllConves(){
  return{
    type: types.REQUEST_ALL_CONVES,
  }
}

export function getAllConvesSuccess(conves){
  return{
    type: types.GET_ALL_CONVES_SUCCESS,
    conves,
  }
}

export function getAllConvesFailure(error){
  return{
    type: types.GET_ALL_CONVES_FAILURE,
    error,
  }
}

export function requestConv(id){
  return{
    type: types.REQUEST_CONV,
    id
  }
}

export function getConvSuccess(conv){
  return{
    type: types.GET_CONV_SUCCESS,
    conv
  }
}

export function getConvFailure(error){
  return{
    type: types.GET_CONV_FAILURE,
    error
  }
}
