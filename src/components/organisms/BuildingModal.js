import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './BuildingModal.css'

export const BuildingModal = ({bldg, show, onModalHide}) => {
  return(
    <Modal
      show = {show}
      onHide = {onModalHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Building No.{bldg.bldgNo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{bldg.info}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick = {onModalHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
