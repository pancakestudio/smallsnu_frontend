import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, Tooltip, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'
import { getBldgNo } from '../../utils/Functions'

export const Map = ({
  currentPos, resData,
  zoom, showSearchMarker, showSideResMarker,
  onMapClick, onZoom, onResClick} ) => {

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

  const handleResClick = (resInfo) => {
    onResClick(resInfo)
  }

  let searchMarker, sideResMarker
  if(showSearchMarker){
    searchMarker = <Marker className="searchMarker" position = {currentPos}> </Marker>
  }
  if(showSideResMarker && resData){
    sideResMarker = resData.map(
      (resInfo) => (<Marker
      className="sideResMarker"
      position = {[resInfo.building.spot.latitude, resInfo.building.spot.longitude]}
      onClick = {() =>{handleResClick(resInfo)}}>
        <Tooltip
          className="sideResToolTip"
          permanent
          clickable = {true}
          onClick = {() =>{handleResClick(resInfo)}}
        >
          {resInfo.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  return (
      <LeafletMap className = "leafletMap"
        center = {currentPos}
        maxZoom = {18}
        minZoom = {15}
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
