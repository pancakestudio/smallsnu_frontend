import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Map as LeafletMap, TileLayer, Marker, Popup, ZoomControl, Polygon, PolygonMarker, Rectangle } from 'react-leaflet'
import './Map.css'

// get the json Data about Buildings information
var json = require('./BuildingCoordinate.json');
var info = new Array(500);
var info_building = [];

// get all the building info
for(let i = 0; i<json.length;i++){
  info[i] = [json[i].coord_1, json[i].coord_2, json[i].coord_3, json[i].coord_4];
  info_building.push(info[i]);
}

// changed the const Map into Class map to implement various methods
class Map extends React.Component {
  // main contructor of Map. which includes propertiy.
  constructor(props){
    super(props);
    this.state = {
      currentPos: {
        lat : 37.459,
        lng : 126.952,
      },
      building_no: "0",
    };
    this.boundCheck = this.boundCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // this method returns true if the location of curser is in the building
  boundCheck = (pos, json) => {
    if((pos.lat >= json.coord_1[0] || pos.lat >= json.coord_2[0])&&(pos.lat <= json.coord_3[0] || pos.lat <= json.coord_4[0])){
      if((pos.lng >= json.coord_1[1] || pos.lng >= json.coord_4[1])&&(pos.lng<=json.coord_2[1] || pos.lng <= json.coord_3[1])){
        return true;
      }
    }return false;
  }
  handleClick = (e) => {
    this.setState({
      currentPos : e.latlng
    })
    for(let i = 0; i<json.length;i++){
      if(this.boundCheck(this.state.currentPos, json[i])){
        this.state.currentPos.lat = (json[i].coord_1[0]+json[i].coord_2[0]+json[i].coord_3[0]+json[i].coord_4[0])/4;
        this.state.currentPos.lng = (json[i].coord_1[1]+json[i].coord_2[1]+json[i].coord_3[1]+json[i].coord_4[1])/4;
        this.state.building_no = json[i].building_no;
        console.log(this.state.building_no);
        break;
      }
    } return;

  }

  render(){
    const popup = (
      <Popup isOpen={true}> Building Number : {this.state.building_no} </Popup>
    )

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
        <Polygon color = "red" positions={info_building}/>
        <ZoomControl position = 'bottomright'/>
          <Marker position = {this.state.currentPos} onClick = {this.handleClick}>
            {popup}
          </Marker>
      </LeafletMap>
    );
  }
}

export default Map
