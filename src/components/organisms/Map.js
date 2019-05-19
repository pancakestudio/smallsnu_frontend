import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Tooltip, ZoomControl
 } from 'react-leaflet'
import './Map.css'
import { getBldgNo } from '../../utils/Functions'

export const Map = ({
  currentPos, zoom, showSearchMarker,
  resData, showResMarkers,
  semis, showSemiMarkers,
  onMapClick, onZoom, onBackgroundClick,
  onSeminarListClick, onResClick}) => {

  const handleClick = (e) => {
    const bldgNo = getBldgNo(e.latlng)
    if(bldgNo && bldgNo!=="0"){
      onMapClick(bldgNo, e.latlng)
    } else {
      onBackgroundClick()
    }
  }

  const handleZoomEnd = (e) => {
    const zoomLevel = e.target._zoom
    onZoom(zoomLevel)
  }

  let searchMarker, resMarkers, semiMarkers
  if(showSearchMarker){
    searchMarker = <Marker className="searchMarker" position = {currentPos}> </Marker>
  }

  if(showResMarkers && resData){
    resMarkers = resData.map((res) => (
      <Marker
        key={res.id}
        className="resMarker"
        position = {[res.building.spot.latitude, res.building.spot.longitude]}
        onClick = {() =>{onResClick(res)}}
      >
        <Tooltip
          className="resToolTip"
          permanent
        >
          {res.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  if(showSemiMarkers){
    if(semis && semis.length!==0){
      let semiBldgs = []
      semis.forEach((semi, index) => {
        let bldg
        if(semiBldgs.length!==0)
          bldg = semiBldgs.find((b)=>(b.code===semi.building.code))
        if(!bldg){
          bldg = semi.building
          bldg.seminars = [semi]
          semiBldgs.push(bldg)
        } else {
          bldg.seminars.push(semi)
        }
      })
      semiMarkers = semiBldgs.map((bldg, index) => (
        <Marker
          key = {bldg.id}
	        className="semiMarker"
	        position = {[bldg.spot.latitude, bldg.spot.longitude]}
          onClick = {() =>{onSeminarListClick(bldg.seminars)}}
        >
          <Tooltip 
            className="semiToolTip"
            permanent
          >
            총 {bldg.seminars.length} 건
          </Tooltip>
        </Marker>
      ))
    }
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
          { resMarkers }
          { semiMarkers }
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
