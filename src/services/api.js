import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

export function getBuildingInfo(bldgNo){
  return axios.get(`building/${bldgNo}`)
    .catch(error => { return {error: error}})
}

export function getRestaurantInfo(){
  return axios.get(`restaurant/`)
    .catch(error => {return {error: error}})
}

export function getSeminarInfo(){
  return axios.get('seminar/')
    .catch(error => { return {error:error}})
}
