import React from 'react'
import { Card, ListGroup, Modal, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './ATMModal.css'

export const ATMModal = ({atm}) => {
  const handleBack = () => {
    if(atm && atm.building){
      let bldgNo = atm.building.code
      historyPush(`/building/${bldgNo}`)
    } else {
      historyPush('/')
    }
  }
  let header, body
  if(atm && atm.building){
    header = (
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title className="title">{atm.kr_name}</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body className="modalBody">
        <Card className="op_hours border-0">
          <ListGroup variant="flush">
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0"><strong>위치:</strong> {atm.building.kr_name}</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-bottom-0"><strong>운영 시간:</strong> {atm.operating_hours}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Modal.Body>
    )
  } else {
    header = (
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title>ATM 정보가 없습니다.</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body>
        정보없음.
      </Modal.Body>
    )
  }
 return(
   <Modal
     show = {true}
     onHide = {()=>{historyPush('/')}}
     dialogClassName = "atmModal"
     scrollable = {true}
     centered
   >
     {header}
     {body}
   </Modal>
 )
}
