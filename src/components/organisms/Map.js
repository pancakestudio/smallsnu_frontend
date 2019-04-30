import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'
import { getBldgNo } from '../../utils/Functions'

export const Map = ({currentPos, zoom, onMapClick, onZoom}) => {
  let map

  const onClick = (e) => {
    const bldgNo = getBldgNo(e.latlng)
    if(bldgNo!=="0"){
      onMapClick(bldgNo, e.latlng)
    }
  }

  const onZoomEnd = (e) => {
    const zoomLevel = map.viewport.zoom
    onZoom(zoomLevel)
  }

  return (
      <LeafletMap className = "leafletMap"
        ref = {(ref) => {map = ref}}
        center = {currentPos}
        maxZoom = {18}
        minZoom = {16}
        maxBounds = {[[37.4468,126.9429],[37.4692,126.9621]]}
        zoom = {zoom}
        zoomControl = {false}
        onZoomEnd = {onZoomEnd}
        onClick = {onClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position = {currentPos}
        >
        </Marker>
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
