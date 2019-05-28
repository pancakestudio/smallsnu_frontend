import React from 'react'
import { Card, ListGroup, Modal, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './RestaurantModal.css'

export const RestaurantModal = ({res}) => {
  const handleBack = () => {
    if(res && res.building){
      let bldgNo = res.building.code
      historyPush(`/building/${bldgNo}`)
    } else {
      historyPush('/')
    }
  }
  let header, body
  if(res && res.building){
    header = (
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title className="title">{res.kr_name}</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body className="modalBody">
        <Card className="op_hours border-0">
          <ListGroup variant="flush">
            <ListGroup.Item className="border-left-0 border-right-0 border-top-0"><strong>위치:</strong> {res.building.kr_name}</ListGroup.Item>
            <ListGroup.Item className="border-left-0 border-right-0 border-bottom-0"><strong>운영 시간:</strong> {res.operating_hours}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Modal.Body>
    )
  } else {
    header = (
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title>식당 정보가 없습니다.</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body>
        정보없음. 암튼 그럼.
      </Modal.Body>
    )
  }
 return(
   <Modal
     show = {true}
     onHide = {()=>{historyPush('/')}}
     dialogClassName = "restaurantModal"
     scrollable = {true}
     centered
   >
     {header}
     {body}
   </Modal>
 )
}
