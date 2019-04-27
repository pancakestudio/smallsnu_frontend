import * as types from '../actions/ActionTypes';


// get the json Data about Buildings information
var json = require('../components/organisms/BuildingCoordinate.json');
var info = new Array(500);
var info_building = [];
// get all the building info
for(let i = 0; i<json.length;i++){
  info[i] = [json[i].coord_1, json[i].coord_2, json[i].coord_3, json[i].coord_4];
  info_building.push(info[i]);
}

function boundCheck(pos, json){
  if((pos.lat >= json.coord_1[0] || pos.lat >= json.coord_2[0])&&(pos.lat <= json.coord_3[0] || pos.lat <= json.coord_4[0])){
    if((pos.lng >= json.coord_1[1] || pos.lng >= json.coord_4[1])&&(pos.lng<=json.coord_2[1] || pos.lng <= json.coord_3[1])){
      return true;
    }
  }return false;
}

// Reducers
const initialState = {
  currentPos: {
    lat : 37.459,
    lng : 126.952,
  },
  building_no: "0",
};

export default function buildingButton(state = initialState, action){
  switch(action.type){
    case types.BUILDING_CLICK:
      state.currentPos = action.e.latlng
      // check building no.
      for(let i = 0; i<json.length;i++){
        if(boundCheck(state.currentPos, json[i])){
          state.currentPos.lat = (json[i].coord_1[0]+json[i].coord_2[0]+json[i].coord_3[0]+json[i].coord_4[0])/4;
          state.currentPos.lng = (json[i].coord_1[1]+json[i].coord_2[1]+json[i].coord_3[1]+json[i].coord_4[1])/4;
          state.building_no = json[i].building_no;
          console.log("building No "+state.building_no);
          break;
        }
      }
      return state;

    default:
      return state;
  }
}
