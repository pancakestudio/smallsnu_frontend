import React from 'react'
import moment from 'moment'
import { Card } from 'react-bootstrap'
import './PostPreview.css'

export const PostPreview = ({title, content, created, username, onClick}) => {
  let c
  let now = moment()
  let date = moment(created).date()
  let diff = now.diff(moment(created), "minutes")
  if(diff <= 0){
    c = "방금"
  } else if(diff<60){
    c = `${diff}분 전`
  } else if(diff<1440 && date==now.date()){
    c = moment(created).format('HH:mm') 
  } else {
    c = moment(created).format('YYYY.MM.DD')
  }
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
        {username} | {c}
      </Card.Footer>
    </Card>
  )
}
