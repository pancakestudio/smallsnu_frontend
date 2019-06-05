import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './AmenityPreview.css'

export const AmenityPreview = ({kr_name, operating_hours, onClick}) => {
  return(
    <Card className="resPreview">
      <Card.Header
        className="cardHeader"
        as="h5"
        onClick={onClick}
        style={{cursor: "pointer"}}
      >
        {kr_name}
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>운영 시간: {operating_hours}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
