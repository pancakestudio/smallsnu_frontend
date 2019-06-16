import React from 'react'
import PropTypes from 'prop-types'
import { Map as LeafletMap, TileLayer, Marker, Tooltip, Popup, ZoomControl } from 'react-leaflet'
import './Map.css'

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

const Map = () => {
  const fs = require('fs')
  let spots = require('./spots.json')
  let id = spots.length+1;
  const handleMapClick = (e) => {
    spots.push({"id": id, "latlng": e.latlng})
    id++
    spots = require('./spots.json')
  }
  const origin = [37.459, 126.952]
  return (
    <LeafletMap className = "LeafletMap"
      center = {origin}
      maxZoom={19}
      zoom={17}
      zoomControl={false}
      onClick={handleMapClick}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { spots.map((s)=>(
        <Marker sticky position={s.latlng}>
          <Tooltip> {s.id} </Tooltip>
        </Marker>
      )) }
      <ZoomControl position = 'bottomright' />
    </LeafletMap>
  )
}

export default Map
