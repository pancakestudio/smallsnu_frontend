import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './RestaurantModal.css'

export const RestaurantModal = ({data, show, onModalHide}) => {
  console.log(data);
  let name = "", op_hours = ""
  if(data !== null) {
    name = data.kr_name
    op_hours = data.operating_hours
  }
  return(
    <Modal
      show = {show}
      onHide = {onModalHide}
      scrollable = {true}
    >
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>

    <Modal.Body>
      <h5> 운영 시간 </h5>
      <p> {op_hours} </p>
      <h5> 오늘의 식단 </h5>
    </Modal.Body>

    <Modal.Footer>
      <Button variant = "secondary" onClick = {onModalHide}> Close</Button>
    </Modal.Footer>
  </Modal>
  )
}
