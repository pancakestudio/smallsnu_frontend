// ------------- Building Info ---------------//
// get the json Data about Buildings information
var json = require('./BuildingCoordinate.json');
var info = {}
var info_building = [];
// get all the building info
for(let i = 0; i<json.length;i++){
  info[json[i].building_no] = {
    center: 
      [(json[i].coord_1[0]+json[i].coord_2[0]+json[i].coord_3[0]+json[i].coord_4[0])/4,
      (json[i].coord_1[1]+json[i].coord_2[1]+json[i].coord_3[1]+json[i].coord_4[1])/4]
  }
}

function boundCheck(pos, json){
  if((pos.lat >= json.coord_1[0] || pos.lat >= json.coord_2[0])
    &&(pos.lat <= json.coord_3[0] || pos.lat <= json.coord_4[0])){
    if((pos.lng >= json.coord_1[1] || pos.lng >= json.coord_4[1])
      &&(pos.lng<=json.coord_2[1] || pos.lng <= json.coord_3[1])){
      return true;
    }
  }
  return false;
}

export function getBldgNo(curPos){
  for(let i = 0; i<json.length;i++){
    if(boundCheck(curPos, json[i])){
      curPos.lat = (json[i].coord_1[0]+json[i].coord_2[0]+json[i].coord_3[0]+json[i].coord_4[0])/4;
      curPos.lng = (json[i].coord_1[1]+json[i].coord_2[1]+json[i].coord_3[1]+json[i].coord_4[1])/4;
      return json[i].building_no;
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
