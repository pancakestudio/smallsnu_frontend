import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import './ResPreview.css'

export const ResPreview = ({kr_name, operating_hours}) => {
  return(
    <Card className="resPreview border-right-0 border-left-0 rounded-0">
      <Card.Header as="h5">{kr_name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>운영 시간: {operating_hours}</ListGroup.Item>
      </ListGroup>
    </Card>
  )
}
