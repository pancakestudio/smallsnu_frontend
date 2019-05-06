import React from 'react'
import { Card } from 'react-bootstrap'
import './BuildingPost.css'

export const BuildingPost = ({title, content}) => {
  return(
    <Card className="buildingPost border-right-0 border-left-0 rounded-0">
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="content text-muted text-truncate">{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}
