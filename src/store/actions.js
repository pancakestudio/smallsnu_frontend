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

export function toggleSidebar(){
  return {
    type: types.TOGGLE_SIDE_BAR
  }
}

export function toggleShuttleMenuMarker(){
  return{
    type: types.TOGGLE_SHUTTLE_MENU_MARKER
  }
}

/******** SearchBar ********/

export function search(bldgNo, bldgPos){
  return{
    type: types.SEARCH,
    bldgNo,
    bldgPos
  }
}

/******** Shuttle ********/
export function requestAllShuttles(){
  return{
    type: types.REQUEST_ALL_SHUTTLE
  }
}

export function getAllShuttleSuccess(stations){
  return{
    type: types.GET_ALL_SHUTTLE_SUCCESS,
    stations
  }
}

export function toggleShuttleMarker(){
  return{
    type: types.TOGGLE_SHUTTLE_MARKER
  }
}

export function requestAllRevShuttles(){
  return{
    type: types.REQUEST_ALL_REV_SHUTTLE
  }
}

export function getAllRevShuttleSuccess(stations){
  return{
    type: types.GET_ALL_REV_SHUTTLE_SUCCESS,
    stations
  }
}

export function toggleRevShuttleMarker(){
  return{
    type: types.TOGGLE_REV_SHUTTLE_MARKER
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

export function savePost(post, bldgNo){
  return{
    type: types.SAVE_POST,
    post,
    bldgNo
  }
}

export function savePostSuccess(bldgNo){
  return {
    type: types.SAVE_POST_SUCCESS,
    bldgNo
  }
}

export function savePostFailure(error){
  return {
    type: types.SAVE_POST_FAILURE,
    error
  }
}

export function editPost(post, bldgNo){
  return{
    type: types.EDIT_POST,
    post,
    bldgNo,
  }
}

export function editPostSuccess(postId){
  return {
    type: types.EDIT_POST_SUCCESS,
    postId
  }
}

export function editPostFailure(error){
  return {
    type: types.EDIT_POST_FAILURE,
    error
  }
}

export function editPostFlag(){
  return{
    type: types.EDIT_POST_FLAG,
  }
}

export function deletePost(post, bldgNo, password){
  return{
    type: types.DELETE_POST,
    post,
    bldgNo,
    password
  }
}

export function deletePostSuccess(bldgNo){
  return {
    type: types.DELETE_POST_SUCCESS,
    bldgNo
  }
}

export function deletePostFailure(error){
  return {
    type: types.DELETE_POST_FAILURE,
    error
  }
}

export function showWritePost(bldgNo) {
  return{
    type: types.SHOW_WRITE_POST,
    bldgNo
  };
}

export function hideWritePost() {
  return {
    type: types.HIDE_WRITE_POST,
  }
}

export function showPasswordCheck(target){
  return{
    type: types.SHOW_PASSWORD_CHECK,
    target
  }
}

export function hidePasswordCheck(){
  return{
    type: types.HIDE_PASSWORD_CHECK
  }
}

export function postLike(postId) {
  return {
    type: types.POST_LIKE,
    postId
  }
}

export function postLikeSuccess(postId) {
  return {
    type: types.POST_LIKE_SUCCESS,
    postId
  }
}

export function postLikeFailure(error) {
  return {
    type: types.POST_LIKE_FAILURE,
    error
  }
}

export function saveComment(comment, postId){
  return {
    type: types.SAVE_COMMENT,
    comment,
    postId
  }
}

export function saveCommentSuccess(postId){
  return {
    type: types.SAVE_COMMENT_SUCCESS,
    postId
  }
}

export function saveCommentFailure(error){
  return {
    type: types.SAVE_COMMENT_FAILURE,
    error
  }
}

export function showEditComment(comment){
  return {
    type: types.SHOW_EDIT_COMMENT,
    comment
  }
}

export function hideEditComment(){
  return {
    type: types.HIDE_EDIT_COMMENT
  }
}

export function editComment(comment, postId){
  return {
    type: types.EDIT_COMMENT,
    comment,
    postId
  }
}

export function editCommentSuccess(postId){
  return {
    type: types.EDIT_COMMENT_SUCCESS,
    postId
  }
}

export function editCommentFailure(error){
  return {
    type: types.EDIT_COMMENT_FAILURE,
    error
  }
}

export function deleteComment(comment, postId, password){
  return {
    type: types.DELETE_COMMENT,
    comment,
    postId,
    password
  }
}

export function deleteCommentSuccess(msg){
  return {
    type: types.DELETE_COMMENT_SUCCESS,
    msg
  }
}

export function deleteCommentFailure(error){
  return {
    type: types.DELETE_COMMENT_FAILURE,
    error
  }
}

export function commentLike(commentId, postId) {
  return {
    type: types.COMMENT_LIKE,
    commentId,
    postId
  }
}

export function commentLikeSuccess(postId) {
  return {
    type: types.COMMENT_LIKE_SUCCESS,
    postId
  }
}

export function commentLikeFailure(error) {
  return {
    type: types.COMMENT_LIKE_FAILURE,
    error
  }
}

export function changeBoardPage(page){
  return {
    type: types.CHANGE_BOARD_PAGE,
    page
  }
}

export function wrongPassword(){
  return {
    type: types.WRONG_PASSWORD,
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


/******** Main ********/

export function refreshData(){
  return {
    type: types.REFRESH_DATA
  }
}
