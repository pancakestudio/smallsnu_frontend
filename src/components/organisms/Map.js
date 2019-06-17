import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Tooltip, ZoomControl} from 'react-leaflet'
import { getBldgNo, getBldgCoord } from '../../utils/Functions'
import { historyPush } from '../../utils/Functions'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { resIcon, semiIcon, convIcon, cafeIcon, atmIcon, bankIcon, shuttleIcon} from '../../utils/iconGroup'
import './Map.css'
import 'react-leaflet-markercluster/dist/styles.min.css';

export const Map = ({
  currentPos, zoom, searchedBldg, showSearchMarker,
  resData, showResMarkers,
  semis, showSemiMarkers,
  banks, showBankMarkers,
  atms, showATMMarkers,
  cafes, showCafeMarkers,
  conves, showConvMarkers,
  onZoom, onBackgroundClick,
  shuttles, showShuttleMarkers,
  revShuttles, showRevShuttleMarkers,
}) => {

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
    const zoomLevel = e.target._zoom
    onZoom(zoomLevel)
  }

  let searchMarker, resMarkers, semiMarkers,
  cafeMarkers, convMarkers, atmMarkers, bankMarkers, shuttleMarkers, revShuttleMarkers
  if(showSearchMarker){
    searchMarker = <Marker className="searchMarker" position = {getBldgCoord(searchedBldg)} onClick={()=>handleSearchClick(searchedBldg)}> </Marker>
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

  if(showShuttleMarkers && shuttles){
    shuttleMarkers = shuttles.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Tooltip
        className="shuttleToolTip"
        direction = 'left'
        offset = {[-12,0]}
      >
        {station.station_info}
      </Tooltip>
    </Marker>
    ))
  }

  if(showRevShuttleMarkers && revShuttles){
    revShuttleMarkers = revShuttles.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Tooltip
        className="revShuttleToolTip"
        direction = 'left'
        offset = {[-12,0]}
      >
        {station.station_info}
      </Tooltip>
    </Marker>
    ))
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
          { resMarkers }
          { semiMarkers }
          { cafeMarkers }
          { convMarkers }
          { bankMarkers }
          { atmMarkers }
          </MarkerClusterGroup>
          { shuttleMarkers }
          { revShuttleMarkers }
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
