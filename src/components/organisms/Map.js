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
        maxZoom = {19}
        zoom = {17}
        zoomControl = {false}
        onClick = {onClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
