import * as types from '../actions/ActionTypes'
import Modal from '../components/organisms/Modal'
import React from 'react';
import {retBuilding_no} from '../components/organisms/Functions.js';

const initialState = {
  currentPos: {
    lat : 37.459,
    lng : 126.952,
  },
  building_no: "0",
  modalShow : false,
};

export default function buildingButton(state = initialState, action){
  console.log(action.type);
  console.log(state);
  switch(action.type){
    case types.BUILDING_CLICK:
      return {
        ...state,
        currentPos : action.e.latlng,
        building_no : retBuilding_no(state.currentPos),
        modalShow : true,
      };
    case types.MODAL_HIDE:
      return {
        ...state,
        modalShow: false,
      };
    default:
      return state;
  }
}
