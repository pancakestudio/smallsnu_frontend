import React from 'react'
import PropTypes from 'prop-types'
import { Map as LeafletMap, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet'
import './Map.css'

const Map = () => {
  const origin = [37.459, 126.952]
  return (
    <LeafletMap className = "LeafletMap"
      center = {origin}
      maxZoom={19}
      zoom={17}
      zoomControl={false}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position = 'bottomright' />
    </LeafletMap>
  )
}

export default Map
