import * as types from './ActionTypes';

export function buildingClick(e){
  return{
    type: types.BUILDING_CLICK,
    e
  };
}
