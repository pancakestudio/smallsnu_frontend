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

export function postWritePost(post, bldgNo){
  const option = {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }),
    };
  return axios.post(`building/${bldgNo}/post/`,post, option)
  .catch(error => {return{error:error}})
}
