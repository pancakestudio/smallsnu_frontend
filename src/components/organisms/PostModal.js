import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './PostModal.css'

export const PostModal = ({post}) => {
  const handleBack = () => {
    if(post && post.building){
      let boardNo = post.building.code
      historyPush(`/board/${boardNo}`)
    } else {
      historyPush('/')
    }
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
        {post.content}
      </Modal.Body>
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
