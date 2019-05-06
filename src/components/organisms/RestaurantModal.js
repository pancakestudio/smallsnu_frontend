import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './RestaurantModal.css'

export const RestaurantModal = ({data, show, onModalHide}) => {
  let name = "default"
  if(data !== null) {
    name = data.kr_name
  }
  return(
    <Modal
      show = {show}
      onHide = {onModalHide}
    >
      <Modal.Header closeButton>
        <Modal.Title> {name} </Modal.Title>
      </Modal.Header>

    <Modal.Body>
      <p>  </p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant = "secondary" onClick = {onModalHide}> Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
