import React from 'react'
import Map from '../../containers/Map'
import { Header } from '../../components/organisms/Header'
import BuildingModal from '../../containers/BuildingModal'
import RestaurantModal from '../../containers/RestaurantModal'
import SeminarModal from '../../containers/SeminarModal'
import SeminarListModal from '../../containers/SeminarListModal'
import PostBoardModal from '../../containers/PostBoardModal'
import PostModal from '../../containers/PostModal'
import WritePostModal from '../../containers/WritePostModal'
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
      <SeminarModal />
      <SeminarListModal />
      <PostBoardModal />
      <PostModal />
      <WritePostModal />
    </div>
  )
}

export default Main
