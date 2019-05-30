import React from 'react'
import Map from '../../containers/Map'
import Header from '../../containers/Header'
import BuildingModal from '../../containers/BuildingModal'
import RestaurantModal from '../../containers/RestaurantModal'
import ATMModal from '../../containers/ATMModal'
import BankModal from '../../containers/BankModal'
import CafeModal from '../../containers/CafeModal'
import ConvModal from '../../containers/ConvModal'
import SeminarModal from '../../containers/SeminarModal'
import SeminarListModal from '../../containers/SeminarListModal'
import BoardModal from '../../containers/BoardModal'
import PostModal from '../../containers/PostModal'
import WritePostModal from '../../containers/WritePostModal'
import PostPWCheck from '../../containers/PostPWCheck'
import Sidebar from '../../containers/Sidebar'
import { Route } from 'react-router-dom'
import './Main.css'

export const Main = ({match, error, getBuilding, getRestaurant,
  getSeminar, getSeminarList, getBoard, getPost, getATM, getBank, getCafe, getConv}) => {
  if(!error || error.length === 0){
    switch(match.params.modal){
      case "building":
        getBuilding(match.params.id)
        break;
      case "restaurant":
        getRestaurant(match.params.id)
        break;
      case "atm":
        getATM(match.params.id)
        break;
      case "bank":
        getBank(match.params.id)
        break;
      case "cafe":
        getCafe(match.params.id)
        break;
      case "conv":
        getConv(match.params.id)
        break;
      case "seminar":
        getSeminar(match.params.id)
        break;
      case "seminarlist":
        getSeminarList(match.params.id)
        break;
      case "board":
        getBoard(match.params.id)
        break;
      case "post":
        getPost(match.params.id)
        break;
      default:
    }
  }
  return (
    <div className = "mainPage">
      <Sidebar />
      <Header />
      <Map />
      <Route exact path="/building/:bldgNo" component={BuildingModal} />
      <Route exact path="/restaurant/:id" component={RestaurantModal} />
      <Route exact path="/atm/:id" component={ATMModal} />
      <Route exact path="/bank/:id" component={BankModal} />
      <Route exact path="/cafe/:id" component={CafeModal} />
      <Route exact path="/conv/:id" component={ConvModal} />
      <Route exact path="/seminar/:id" component={SeminarModal} />
      <Route exact path="/seminarlist/:bldgNo" component={SeminarListModal} />
      <Route exact path="/board/:bldgNo" component={BoardModal} />
      <Route exact path="/post/:id" component={PostModal} />
      <WritePostModal />
      <PostPWCheck />
    </div>
  )
}
