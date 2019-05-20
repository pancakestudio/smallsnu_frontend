import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './PostModal.css'

export const PostModal = ({post, show, onModalHide, onShowPostList}) => {
  console.log("post info")
  console.log(post)
  let modal
  if(post){
    modal = <Modal
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "postModal"
      scrollable = {true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {post.content}
      </Modal.Body>

      <Modal.Footer>
        <Button variant = "secondary" onClick = {onShowPostList}>뒤로가기</Button>
      </Modal.Footer>
    </Modal>
  }else{
    modal = < Modal
      show = {show}
      onHide = {onModalHide}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>게시글 정보가 없습니다.</Modal.Title>
      </Modal.Header>
  </Modal>
  }
  return modal
}
