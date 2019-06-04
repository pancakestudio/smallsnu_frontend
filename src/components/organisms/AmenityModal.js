import React from 'react'
import { Card, ListGroup, Modal, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { ModalSpinner } from '../molecules/ModalSpinner'
import { historyPush } from '../../utils/Functions'
import './AmenityModal.css'

export const AmenityModal = ({match, res, cafe, conv, bank, atm}) => {
  let data
  switch(match.params.amenity){
    case "restaurant":
      data = res
      break
    case "cafe":
      data = cafe
      break
    case "conv":
      data = conv
      break
    case "bank":
      data = bank
      break
    case "atm":
      data = atm
      break
    default:
  }

  const handleBack = () => {
    if(data && data.building){
      let bldgNo = data.building.code
      historyPush(`/building/${bldgNo}`)
    } else {
      historyPush('/')
    }
  }

  if(Object.keys(data).length>0){
    return (
      <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "amenityModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title className="title">{data.kr_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          <Card className="op_hours border-0">
            <ListGroup variant="flush">
              <ListGroup.Item className="border-left-0 border-right-0 border-top-0"><strong>위치:</strong> {data.building.kr_name}</ListGroup.Item>
              <ListGroup.Item className="border-left-0 border-right-0 border-bottom-0">
                <strong>운영 시간:</strong><br/>
                {data.operating_hours.split('\n').map(line=>(
                  <span key={line}>{line}<br/></span>
                ))}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Modal.Body>
      </Modal>
    )
  } else {
    return (
      <ModalSpinner />
    )
  }
}
