import React from 'react'
import { Modal, Card, ListGroup } from 'react-bootstrap'
import './SeminarModal.css'

export const SeminarModal = ({semi, show, onModalHide}) => {
  let title, semiCard
  if(semi && semi.title){
    title = semi.title.replace("[Seminar] ", "")
    semiCard = (
      <Card className="semiCard border-0">
        <ListGroup>
          <ListGroup.Item className="border-left-0 border-right-0 border-top-0"><strong>강연자:</strong> {semi.talker}</ListGroup.Item>
          <ListGroup.Item className="border-left-0 border-right-0"><strong>장소:</strong> {semi.where}</ListGroup.Item>
          <ListGroup.Item className="border-left-0 border-right-0"><strong>시간:</strong> {semi.time}</ListGroup.Item>
          <ListGroup.Item className="border-left-0 border-right-0 border-bottom-0"><strong>요약:</strong><br/>{semi.description}</ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <a href={semi.link}>사이트 바로가기</a>
        </Card.Footer>
      </Card>
    )
  }
  return (
    <Modal 
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "seminarModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        { semiCard }
      </Modal.Body>
    </Modal>
  )
}
