import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './SemiPreview.css'

export const SemiPreview = ({title, talker, where, time, onClick}) => {
  return(
    <Card className="semiPreview"> 
      <Card.Header 
        className="cardHeader"
        onClick={onClick}
        style={{cursor: "pointer"}}
        as="h5"
      >
        {title.replace("[Seminar] ","")}
      </Card.Header>
      <ListGroup>
        <ListGroup.Item>강연자: {talker}</ListGroup.Item>
        <ListGroup.Item>장소: {where}</ListGroup.Item>
        <ListGroup.Item>시간: {time}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
