import React from 'react'
import { trimCreated } from '../../utils/Functions'
import { Card } from 'react-bootstrap'
import './PostPreview.css'

export const PostPreview = ({title, content, created, username, like, comments, onClick}) => {
  let c = trimCreated(created)
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
      <Card.Footer className="footer text-muted border-top-0">
        {username} | {c} | 추천 {like} | 댓글 {comments.length}
      </Card.Footer>
    </Card>
  )
}
