import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './BuildingModal.css'

export const BuildingModal = ({bldgNo, show, onModalHide}) => {
  return(
    <Modal
      show = {show}
      onHide = {onModalHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Building No.{bldgNo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick = {onModalHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}
