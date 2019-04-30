import React from 'react'
import Map from '../../containers/Map'
import Header from '../../containers/Header'
import BuildingModal from '../../containers/BuildingModal'
import Sidebar from '../organisms/Sidebar'
import './Main.css'

const Main = (props) => {
  return (
    <div className = "mainPage">
      <Sidebar />
      <Header />
      <Map />
      <BuildingModal />
    </div>
  )
}

export default Main
