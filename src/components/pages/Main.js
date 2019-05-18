import React from 'react'
import Map from '../../containers/Map'
import { Header } from '../../components/organisms/Header'
import BuildingModal from '../../containers/BuildingModal'
import RestaurantModal from '../../containers/RestaurantModal'
import Sidebar from '../../containers/Sidebar'
import './Main.css'

const Main = (props) => {
  return (
    <div className = "mainPage">
      <Sidebar />
      <Header />
      <Map />
      <BuildingModal />
      <RestaurantModal />
    </div>
  )
}

export default Main
