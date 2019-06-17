import React from 'react'
import { Modal } from 'react-bootstrap'
import { BuildingInfo } from '../molecules/BuildingInfo'
import { ModalSpinner } from '../molecules/ModalSpinner'
import { historyPush } from '../../utils/Functions'
import './BuildingModal.css'

export const BuildingModal = ({bldg}) => {
  if(bldg && Object.keys(bldg).length>0){
  let info
  if(bldg.info){
    info = bldg.info.split('\n').map(line =>(
      <span key={line}>{line}<br/></span>
    ))
  }
    return(
      <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "buildingModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{bldg.krName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>건물 정보</h5>
          <p> {info} </p>
          <BuildingInfo
            bldgNo={bldg.bldgNo}
            rests={bldg.restaurants}
            semis={bldg.seminars}
            posts={bldg.posts}
          />
        </Modal.Body>

      </Modal>
    )
  } else {
    return (
      <ModalSpinner/>
    )
  }
}
