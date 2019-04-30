import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'
import { getBldgNo } from '../../utils/Functions'

export const Map = ({currentPos, zoom, showMarker, onMapClick, onZoom}) => {
  let map

  const handleClick = (e) => {
    const bldgNo = getBldgNo(e.latlng)
    if(bldgNo!=="0"){
      onMapClick(bldgNo, e.latlng)
    }
  }

  const handleZoomEnd = (e) => {
    const zoomLevel = map.viewport.zoom
    onZoom(zoomLevel)
  }

  let marker

  if(showMarker){
    marker = <Marker position = {currentPos}> </Marker>
  }
    
  return (
      <LeafletMap className = "leafletMap"
        ref = {(ref) => {map = ref}}
        center = {currentPos}
        maxZoom = {18}
        minZoom = {16}
        maxBounds = {[[37.4428,126.9398],[37.4718,126.9686]]}
        zoom = {zoom}
        zoomControl = {false}
        onZoomEnd = {handleZoomEnd}
        onClick = {handleClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        { marker }
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
