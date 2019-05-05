import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'
import { getBldgNo } from '../../utils/Functions'

export const Map = ({
  currentPos, resPos, resData,
  zoom, showSearchMarker, showSideResMarker,
  onMapClick, onZoom} ) => {

  const handleClick = (e) => {
    const bldgNo = getBldgNo(e.latlng)
    if(bldgNo && bldgNo!=="0"){
      onMapClick(bldgNo, e.latlng)
    }
  }

  const handleZoomEnd = (e) => {
    const zoomLevel = e.target._zoom
    onZoom(zoomLevel)
  }

  const handleResClick = (building_no) => {

  }

  let searchMarker, sideResMarker
  if(showSearchMarker){
    searchMarker = <Marker className="searchMarker" position = {currentPos}> </Marker>
  }else if(showSideResMarker){
    sideResMarker = resPos.map(
      pos => <Marker className="sideResMarker"  position = {pos} onClick = {handleResClick} />
    )
  }

  return (
      <LeafletMap className = "leafletMap"
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
        { searchMarker }
        { sideResMarker }
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
