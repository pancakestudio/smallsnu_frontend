import * as types from './ActionTypes';

export function buildingClick(e){
  return{
    type: types.BUILDING_CLICK,
    e
  };
}

export function modalHide(modalFlag){
  return{
    type: types.MODAL_HIDE,
    modalFlag
  };
}
