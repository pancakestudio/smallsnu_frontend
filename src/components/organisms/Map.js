import React, {Component, PropTypes} from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Map extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
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
    this.props.dispatch(actions.buildingClick(e));
  }

}

const mapStateToProps = (state) => {
  return {
    currentPos : state.currentPos,
    building_no : state.building_no,
    modalShow : state.modalShow
  }
};

export default connect(mapStateToProps)(Map);
