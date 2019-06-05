import React from 'react'
import { Card } from 'react-bootstrap'
import './PostPreview.css'

export const PostPreview = ({title, content, onClick}) => {
  return(
    <Card
      className="postPreview border-right-0 border-left-0 rounded-0"
      onClick={onClick}
      style={{cursor: "pointer"}}
    >
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text className="content text-muted text-truncate">{content}</Card.Text>
      </Card.Body>
    </Card>
  )
}
