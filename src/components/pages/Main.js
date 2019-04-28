import React from 'react'
import Map from '../organisms/Map'
import Header from '../organisms/Header'
import Modal from '../organisms/Modal'
import './Main.css'
import { connect } from 'react-redux'

const Main = (props) => {
  console.log("main rerendering!");
  console.log(props.building_no);
  return (
  <div className = "MainPage">
    <Header className = "Header"/>
    <Map className = "Map"/>
    <Modal className = "buildingModal"
      modalShow={props.modalShow}
      building_no={props.building_no}
      />
  </div>
)
}

const mapStateToProps = (state) => {
  return {
    modalShow: state.buildingButton.modalShow,
    building_no : state.buildingButton.building_no,
}}

export default connect(mapStateToProps)(Main)
