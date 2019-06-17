import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Tooltip, Popup, ZoomControl, Polyline } from 'react-leaflet'
import { getBldgNo, getBldgCoord } from '../../utils/Functions'
import { historyPush } from '../../utils/Functions'
import MarkerClusterGroup from 'react-leaflet-markercluster';
import { resIcon, semiIcon, convIcon, cafeIcon, atmIcon, bankIcon, shuttleIcon} from '../../utils/iconGroup'
import './Map.css'
import 'react-leaflet-markercluster/dist/styles.min.css';
import { popupContent, popupHead, popupText, revPopupContent} from "./MapPopup";
import ShuttleStation from '../../utils/ShuttleStation'
import RevShuttleStation from '../../utils/RevShuttleStation'
import MidLibShuttleStation from '../../utils/MidLibShuttleStation'
import MidShuttleStation from '../../utils/MidShuttleStation'
import SchoolShuttleStation from '../../utils/SchoolShuttleStation'

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
  onZoom, onBackgroundClick,
  showShuttleMarkers, showRevShuttleMarkers,
  showSchoolShuttleMarkers, showMidShuttleMarkers,
  showMidLibShuttleMarkers,
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
    const zoomLevel = e.target.getZoom()
    onZoom(zoomLevel)
  }

  const handleMoveEnd = (e) => {
    center = e.target.getCenter()
  }

  const handleSrcDragEnd = (e) => {
    const pos = e.target.getLatLng()
    if(pos)
      onSrcDragEnd(pos)
    else
      alert('다시 시도해주세요.')
  }

  const handleDestDragEnd = (e) => {
    const pos = e.target.getLatLng()
    if(pos)
      onDestDragEnd(pos)
    else
      alert('다시 시도해주세요.')
  }

  let searchMarker, srcMarker, destMarker, pathLine, resMarkers, semiMarkers,
  cafeMarkers, convMarkers, atmMarkers, bankMarkers, shuttleMarkers, revShuttleMarkers,
  schoolShuttleMarkers, midLibShuttleMarkers, midShuttleMarkers, shuttleLine
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

  if(showShuttleMarkers){
    shuttleMarkers = ShuttleStation.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
        <Popup className="request-popup">
          <div style={popupContent}>
          <div className="m-2" style={popupHead}>
            {station.station_info}
          </div>
          <div style={popupText}>학기중 08:00 ~ 10:00 (4분 간격), 10:00 ~ 19:00 (5분 간격)</div>
          <div style={popupText}>19:00 ~ 21:00 (15분 간격)</div>
          <div style={popupText}>계절학기 08:00 ~ 10:00 (6분 간격), 10:00 ~ 18:00 (9분 간격)</div>
          <div style={popupHead}>{"다음 정류장 : "+station.next}</div>

          </div>
      </Popup>
    </Marker>
    ))
  }

  if(showRevShuttleMarkers){
    revShuttleMarkers = RevShuttleStation.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Popup className="request-popup">
        <div style={revPopupContent}>
        <div className="m-2" style={popupHead}>
          {station.station_info}{" (역방향)"}
        </div>
        <div style={popupText}>학기중 10:00 ~ 15:00 (30분 간격), 16:00 ~ 18:00 (30분 간격)</div>
        </div>
        <div style={popupHead}>{"다음 정류장 : "+station.next}</div>
    </Popup>
    </Marker>
    ))
  }

  if(showMidLibShuttleMarkers){
    midLibShuttleMarkers = MidLibShuttleStation.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Popup className="request-popup">
        <div style={popupContent}>
        <div className="m-2" style={popupHead}>
          {station.station_info}
        </div>
        <div style={popupText}>{station.content}</div>
        </div>
    </Popup>
    </Marker>
    ))
  }

  if(showMidShuttleMarkers){
    midShuttleMarkers = MidShuttleStation.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Popup className="request-popup">
        <div style={popupContent}>
        <div className="m-2" style={popupHead}>
          {station.station_info}{" (심야 셔틀)"}
        </div>
        <div style={popupText}>{"24:00, 24:30, 01:00, 01:30, 02:30"}</div>
        </div>
        <div style={popupHead}>{"다음 정류장 : "+station.next}</div>
    </Popup>
    </Marker>
    ))
  }

  if(showSchoolShuttleMarkers){
    schoolShuttleMarkers = SchoolShuttleStation.map((station)=> (
      <Marker
        key = {station.key} icon={shuttleIcon}
        position = {[station.coord[0], station.coord[1]]}
      >
      <Popup className="request-popup">
        <div style={popupContent}>
        <div className="m-2" style={popupHead}>
          {station.station_info}{" (통학 셔틀)"}
        </div>
        <div style={popupText}>{station.content}</div>
        </div>
    </Popup>
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
            { resMarkers }
            { semiMarkers }
            { cafeMarkers }
            { convMarkers }
            { bankMarkers }
            { atmMarkers }
          </MarkerClusterGroup>
          { srcMarker }
          { destMarker }
          { pathLine }
          { shuttleMarkers }
          { shuttleLine }
          { revShuttleMarkers }
          { midLibShuttleMarkers }
          { midShuttleMarkers }
          { schoolShuttleMarkers }
        <ZoomControl position = 'bottomright'/>
      </LeafletMap>
  )
}
