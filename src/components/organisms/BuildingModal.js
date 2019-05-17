import React from 'react'
import { Modal } from 'react-bootstrap'
import BuildingInfo from '../../containers/BuildingInfo'
import './BuildingModal.css'

export const BuildingModal = ({bldg, show, onModalHide}) => {
  return(
    <Modal
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "buildingModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{bldg.bldgNo}동</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5>건물 정보</h5>
        <p>{bldg.info}</p>
        <BuildingInfo 
          rests={bldg.restaurants}
          semis={bldg.seminars}
          posts={bldg.posts}
        />
      </Modal.Body>

    </Modal>
  )
}
