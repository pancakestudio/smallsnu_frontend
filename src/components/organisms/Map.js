import React from 'react'
import {
   Map as LeafletMap, TileLayer,
   Marker, Popup, ZoomControl, Polygon,
   PolygonMarker
 } from 'react-leaflet'
import './Map.css'

export const Map = ({currentPos, onMapClick}) => {
  const onClick = (e) => {
    onMapClick(e.latlng)
  }

  return (
      <LeafletMap className = "leafletMap"
        center = {currentPos}
        maxZoom = {18}
        minZoom = {16}
        maxBounds = {[[37.4468,126.9429],[37.4692,126.9621]]}
        zoom = {17}
        zoomControl = {false}
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
