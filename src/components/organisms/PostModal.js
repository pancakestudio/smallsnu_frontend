import React from 'react'
import moment from 'moment'
import { Modal, Button, Card } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './PostModal.css'

export const PostModal = ({post, onShowWritePostModal, onEdit, onShowCheckPWModal}) => {
  let postShow = true

  const handleBack = () => {
    if(post && post.building){
      let boardNo = post.building.code
      historyPush(`/board/${boardNo}`)
    } else {
      historyPush('/')
    }
  }
  const handleEdit = () => {
    onEdit()
    onShowWritePostModal()
  }
  const handleDelete = () => {
    onShowCheckPWModal()
  }

  let modal
  if(post){
    modal = <Modal
      show = {true}
      onHide = {()=>{historyPush('/')}}
      dialogClassName = "postModal"
      scrollable = {true}
      centered
    >
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title className="title">{post.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Card className="border-0">
          <Card.Header className="postHeader text-muted">
            작성자: {post.username} | 작성일시: {moment(post.created).format("YYYY.MM.DD HH:mm:ss")}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <br/>
              {post.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal.Body>

      <Modal.Footer>
          <Button variant = "secondary" onClick={handleEdit}>수정</Button>
          <Button variant = "danger" onClick={handleDelete}>삭제</Button>
      </Modal.Footer>
    </Modal>
  }else{
    modal = <Modal
      show = {true}
      onHide = {()=>{historyPush('/')}}
      centered
    >
      <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title>게시글 정보가 없습니다.</Modal.Title>
      </Modal.Header>
  </Modal>
  }
  return modal
}
