import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Tooltip, ZoomControl, Polyline } from 'react-leaflet'
import { getBldgNo, getBldgCoord } from '../../utils/Functions'
import { historyPush } from '../../utils/Functions'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { resIcon, semiIcon, convIcon, cafeIcon, atmIcon, bankIcon} from '../../utils/iconGroup'
import './Map.css'
import 'react-leaflet-markercluster/dist/styles.min.css';

let center = {lat: 37.459, lng: 126.952}
export const Map = ({
  currentPos, zoom, searchedBldg, showSearchMarker,
  source, destination, path,
  onSrcDragEnd, onDestDragEnd,
  resData, showResMarkers,
  semis, showSemiMarkers,
  banks, showBankMarkers,
  atms, showATMMarkers,
  cafes, showCafeMarkers,
  conves, showConvMarkers,
  onZoom, onBackgroundClick}) => {

  const handleMapClick = (e) => {
    const bldgNo = getBldgNo(e.latlng)
    if(bldgNo && bldgNo!=="0"){
      historyPush(`/building/${bldgNo}`)
    } else {
      onBackgroundClick()
    }
  }

  const handleSearchClick = (bldgNo) => {
    historyPush(`/building/${bldgNo}`)
  }

  const handleResClick = (resId) => {
    historyPush(`/restaurant/${resId}`)
  }

  const handleCafeClick = (cafeId) =>{
    historyPush(`/cafe/${cafeId}`)
  }

  const handleConvClick = (convId) => {
    historyPush(`/conv/${convId}`)
  }

  const handleBankClick = (bankId) => {
    historyPush(`/bank/${bankId}`)
  }

  const handleATMClick = (atmId) => {
    historyPush(`/atm/${atmId}`)
  }

  const handleSeminarListClick = (bldgNo) => {
    historyPush(`/seminarlist/${bldgNo}`)
  }

  const handleZoomEnd = (e) => {
    const zoomLevel = e.target.getZoom()
    onZoom(zoomLevel)
  }

  const handleMoveEnd = (e) => {
    center = e.target.getCenter()
  }

  const handleSrcDragEnd = (e) => {
    const pos = e.target.getLatLng()
    onSrcDragEnd(pos)
  }

  const handleDestDragEnd = (e) => {
    const pos = e.target.getLatLng()
    onDestDragEnd(pos)
  }

  let searchMarker, srcMarker, destMarker, pathLine, resMarkers, semiMarkers,
  cafeMarkers, convMarkers, atmMarkers, bankMarkers
  if(showSearchMarker){
    searchMarker = <Marker className="searchMarker" position = {getBldgCoord(searchedBldg)} onClick={()=>handleSearchClick(searchedBldg)}> </Marker>
  }

  if(source && Object.keys(source).length!==0){
    srcMarker =
      <Marker
        className="srcMarker"
        draggable
        autoPan
        autoPanPadding={[100,100]}
        autoPanSpeed={20}
        onDragEnd={handleSrcDragEnd}
        position={(source.pos) ? source.pos : center}
      />
  }

  if(destination && Object.keys(destination).length!==0){
    destMarker = 
      <Marker
        className="destMarker"
        draggable
        autoPan
        autoPanPadding={[100,100]}
        autoPanSpeed={20}
        onDragEnd={handleDestDragEnd}
        position={(destination.pos) ? destination.pos : center}
      /> 
  }

  if(path && path.path){
    let latlngs = []
    path.path.forEach((p)=>{
      const latlng = {lat: p.latitude, lng: p.longitude}
      latlngs.push(latlng)
    })
    pathLine = (
      <Polyline
        positions={latlngs}
        color="#0277BD"
      />
    )
  }

  if(showSemiMarkers){
    if(semis && semis.length!==0){
      let semiBldgs = []
      semis.forEach((semi, index) => {
        let bldg
        if(semiBldgs.length!==0)
          bldg = semiBldgs.find((b)=>(b.code===semi.building.code))
        if(!bldg){
          bldg = {spot: semi.building.spot, code: semi.building.code, cnt: 1}
          semiBldgs.push(bldg)
        } else {bldg.cnt++;}
      })
      semiMarkers = semiBldgs.map((bldg, index) => (
        <Marker
          key = {bldg.code} className="semiMarker" icon = {semiIcon}
  	      position = {[bldg.spot.latitude, bldg.spot.longitude]}
          onClick = {() =>{handleSeminarListClick(bldg.code)}}
        >
          <Tooltip
            className="semiToolTip"
            direction = 'left'
            offset = {[-12,0]}
          >
            총 {bldg.cnt} 건
          </Tooltip>
        </Marker>
      ))
    }
  }

  if(showResMarkers && resData){
    resMarkers = resData.map((res) => (
      <Marker
        key={res.id} className="resMarker" icon = {resIcon}
        position = {[res.building.spot.latitude, res.building.spot.longitude]}
        onClick = {() =>{handleResClick(res.id)}}
      >
        <Tooltip
          className="resToolTip"
          direction = 'left'
          offset = {[-12,0]}
        >
          {res.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  if(showCafeMarkers && cafes){
    cafeMarkers = cafes.map((cafe) => (
      <Marker
        key={cafe.id} className="cafeMarker" icon = {cafeIcon}
        position = {[cafe.building.spot.latitude, cafe.building.spot.longitude]}
        onClick = {() => {handleCafeClick(cafe.id)}}
      >
        <Tooltip
          className="cafeToolTip"
          direction = 'left'
          offset = {[-12,0]}
        >
          {cafe.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  if(showConvMarkers && conves){
    convMarkers = conves.map((conv) => (
      <Marker
        key={conv.id} className="convMarker" icon = {convIcon}
        position = {[conv.building.spot.latitude, conv.building.spot.longitude]}
        onClick = {() => {handleConvClick(conv.id)}}
      >
        <Tooltip
          className="convToolTip"
          direction = 'left'
          offset = {[-12,0]}
        >
          {conv.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  if(showBankMarkers && banks){
    bankMarkers = banks.map((bank) => (
      <Marker
        key={bank.id} className="bankMarker" icon = {bankIcon}
        position = {[bank.building.spot.latitude, bank.building.spot.longitude]}
        onClick = {() => {handleBankClick(bank.id)}}
      >
        <Tooltip
          className="bankToolTip"
          direction = 'left'
          offset = {[-12,0]}
        >
          {bank.kr_name}
        </Tooltip>
      </Marker>
    ))
  }

  if(showATMMarkers && atms){
    atmMarkers = atms.map((atm) => (
      <Marker
        key={atm.id} className="atmMarker" icon = {atmIcon}
        position = {[atm.building.spot.latitude, atm.building.spot.longitude]}
        onClick = {() => {handleATMClick(atm.id)}}
      >
        <Tooltip
          className="atmToolTip"
          direction = 'left'
          offset = {[-12,0]}
        >
          {atm.kr_name}
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
        onMoveEnd = {handleMoveEnd}
        onClick = {handleMapClick}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          <MarkerClusterGroup
            spiderLegPolylineOptions={{
            weight: 0,
            opacity: 0,
            }}
          >
          { searchMarker }
          { srcMarker }
          { destMarker }
          { pathLine }
          { resMarkers }
          { semiMarkers }
          { cafeMarkers }
          { convMarkers }
          { bankMarkers }
          { atmMarkers }
          </MarkerClusterGroup>
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
