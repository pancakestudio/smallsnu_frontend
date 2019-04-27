import React, {Component, PropTypes} from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker, Rectangle
 } from 'react-leaflet'
import './Map.css'
import { connect } from 'react-redux';
import * as actions from '../../actions';

// get the json Data about Buildings information
// this code can be erased!!! no need (only visualize building block)
// var json = require('./BuildingCoordinate.json');
// var info = new Array(500);
// var info_building = [];
// // get all the building info
// for(let i = 0; i<json.length;i++){
//   info[i] = [json[i].coord_1, json[i].coord_2, json[i].coord_3, json[i].coord_4];
//   info_building.push(info[i]);
// }

class Map extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPos: {
        lat : 37.459,
        lng : 126.952,
      }, building_no: "0",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    console.log("rendering event occur!");
    return (
      <LeafletMap className = "LeafletMap"
        center = {[37.459, 126.952]}
        maxZoom = {19}
        zoom = {17}
        zoomControl = {false}
        onClick = {this.handleClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
    );
  }

  handleClick = (e) => {
    this.props.dispatch(actions.buildingClick(e));
  }

}

const mapStateToProps = (state) => {
  return {
    currentPos : state.currentPos,
    building_no : state.building_no
  }
};

export default connect(mapStateToProps)(Map);
