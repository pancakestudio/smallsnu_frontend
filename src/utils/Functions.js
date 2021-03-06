import { history } from '../BrowserRouter'
import moment from 'moment'

// ------------- Building Info ---------------//
// get the json Data about Buildings information
var bldgCoords = require('./BuildingCoordinate.json');
var keywords = require('./SearchKeywords.json');
var spots = require('./spots.json')
var info = []
// get all the building info
for(let i = 0; i<bldgCoords.length;i++){
  info[bldgCoords[i].building_no] = {
    center:
      [(bldgCoords[i].coord_1[0]+bldgCoords[i].coord_2[0]+bldgCoords[i].coord_3[0]+bldgCoords[i].coord_4[0])/4,
      (bldgCoords[i].coord_1[1]+bldgCoords[i].coord_2[1]+bldgCoords[i].coord_3[1]+bldgCoords[i].coord_4[1])/4]
  }
}

function boundCheck(pos, bldgCoord){
  let cnt = 0;
  if((bldgCoord.coord_1[0] <= pos.lat) !== (bldgCoord.coord_2[0] < pos.lat))
    if(bldgCoord.coord_2[1]-(bldgCoord.coord_2[0]-pos.lat)/(bldgCoord.coord_2[0]-bldgCoord.coord_1[0])*(bldgCoord.coord_2[1]-bldgCoord.coord_1[1])>pos.lng)
      cnt++;
  if((bldgCoord.coord_2[0] <= pos.lat) !== (bldgCoord.coord_3[0] < pos.lat))
    if(bldgCoord.coord_3[1]-(bldgCoord.coord_3[0]-pos.lat)/(bldgCoord.coord_3[0]-bldgCoord.coord_2[0])*(bldgCoord.coord_3[1]-bldgCoord.coord_2[1])>pos.lng)
      cnt++;
  if((bldgCoord.coord_3[0] <= pos.lat) !== (bldgCoord.coord_4[0] < pos.lat))
    if(bldgCoord.coord_4[1]-(bldgCoord.coord_4[0]-pos.lat)/(bldgCoord.coord_4[0]-bldgCoord.coord_3[0])*(bldgCoord.coord_4[1]-bldgCoord.coord_3[1])>pos.lng)
      cnt++;
  if((bldgCoord.coord_4[0] <= pos.lat) !== (bldgCoord.coord_1[0] < pos.lat))
    if(bldgCoord.coord_1[1]-(bldgCoord.coord_1[0]-pos.lat)/(bldgCoord.coord_1[0]-bldgCoord.coord_4[0])*(bldgCoord.coord_1[1]-bldgCoord.coord_4[1])>pos.lng)
      cnt++;
  if(cnt%2===0){
    return false
  } else {
    return true
  }
}

export function getBldgNo(curPos){
  for(let i = 0; i<bldgCoords.length;i++){
    if(boundCheck(curPos, bldgCoords[i])){
      curPos.lat = (bldgCoords[i].coord_1[0]+bldgCoords[i].coord_2[0]+bldgCoords[i].coord_3[0]+bldgCoords[i].coord_4[0])/4;
      curPos.lng = (bldgCoords[i].coord_1[1]+bldgCoords[i].coord_2[1]+bldgCoords[i].coord_3[1]+bldgCoords[i].coord_4[1])/4;
      return bldgCoords[i].building_no;
    }
  }
  return ("0");
}

export function getBldgCoord(bldgNo){
  if(bldgNo in info){
    return info[bldgNo].center;
  }
  return undefined;
}

export function getNearestSpot(pos){
  let nearestSpot
  let shortest=Number.MAX_VALUE
  for(let i=0;i<spots.length;i++){
    let dist = (spots[i].latlng.lat-pos.lat)*(spots[i].latlng.lat-pos.lat)+(spots[i].latlng.lng-pos.lng)*(spots[i].latlng.lng-pos.lng)
    if(dist < shortest){
      shortest = dist
      nearestSpot = spots[i]
    }
  }
  return nearestSpot
}

export function getKeyword(inputValue, subject){
  for(let i = 0; i<keywords.length;i++){
    if(inputValue === keywords[i].keyword) return keywords[i].subject
  }
  return "";
}

export function historyPush(url){
  history.push(url)
}

export function trimCreated(created){
  let c
  let now = moment()
  let date = moment(created).date()
  let diff = now.diff(moment(created), "minutes")
  if(diff <= 0){
    c = "방금"
  } else if(diff<60){
    c = `${diff}분 전`
  } else if(diff<1440 && date===now.date()){
    c = moment(created).format('HH:mm') 
  } else {
    c = moment(created).format('YYYY.MM.DD')
  }
  return c
}
