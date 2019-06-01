import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

export function getBuildingInfo(bldgNo){
  return axios.get(`building/${bldgNo}`)
    .catch(error => { return {error: error}})
}

export function getBoardInfo(bldgNo){
  return axios.get(`building/${bldgNo}/post`)
    .catch(error => { return {error: error}})
}

export function getPostInfo(id){
  return axios.get(`post/${id}`)
    .catch(error => { return {error: error}})
}

export function getRestaurantInfo(id){
  return axios.get(`restaurant/${id}`)
    .catch(error => { return {error: error}})
}

export function getAllRestaurantsInfo(){
  return axios.get(`restaurant/`)
    .catch(error => {return {error: error}})
}

export function getSeminarInfo(id){
  return axios.get(`seminar/${id}`)
    .catch(error => { return {error: error}})
}

export function getBldgSeminarInfo(bldgNo){
  return axios.get(`building/${bldgNo}/seminar`)
    .catch(error => { return {error: error}})
}

export function getAllSeminarsInfo(){
  return axios.get('seminar/')
    .catch(error => { return {error:error}})
}

export function getBankInfo(id){
  return axios.get(`bank/${id}`)
    .catch(error => { return {error: error}})
}

export function getAllBanksInfo(){
  return axios.get('bank/')
    .catch(error => { return {error:error}})
}

export function getATMInfo(id){
  return axios.get(`atm/${id}`)
    .catch(error => { return {error: error}})
}

export function getAllATMsInfo(){
  return axios.get('atm/')
    .catch(error => { return {error:error}})
}

export function getCafeInfo(id){
  return axios.get(`cafe/${id}`)
    .catch(error => { return {error: error}})
}

export function getAllCafesInfo(){
  console.log("Cafe")
  return axios.get('cafe/')
    .catch(error => { return {error:error}})
}

export function getConvInfo(id){
  return axios.get(`conv/${id}`)
    .catch(error => { return {error: error}})
}

export function getAllConvesInfo(){
  return axios.get('conv/')
    .catch(error => { return {error:error}})
}

export function postWritePost(post, bldgNo){
  const option = {
    headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }),
  };
  return axios.post(`building/${bldgNo}/post/`,post, option)
  .catch(error => {return{error:error}})
}

export function postEditPost(post){
  const option = {
    headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }),
  };
  return axios.post(`post/${post.id}/`, post, option)
  .catch(error => {return{error:error}})
}

export function postDeletePost(post){
  let password = { "password" : post.password }
  const option = {
    method: 'DELETE',
    headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }),
    mode : 'cors',
    data : JSON.stringify(password)
  };
  return axios.delete(`post/${post.id}/`, option)
  .catch(error => {return{error:error}})
}
