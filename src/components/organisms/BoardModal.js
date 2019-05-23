import React from 'react';
import { Modal, Card, Button } from 'react-bootstrap'
import { PostPreview } from '../atoms/PostPreview'
import { historyPush } from '../../utils/Functions'
import './BoardModal.css'

export const BoardModal = ({bldgNo, onModalHide, posts, onShowWritePostModal}) => {
  const handleBack = () => {
    historyPush(`/building/${bldgNo}`)
  }

  const handlePostClick = (id) => {
    historyPush(`/post/${id}`)
  }

  let modal
  if(posts && posts.length!==0){
    modal = <Modal
      show = {true}
      onHide = {()=>{historyPush('/')}}
      dialogClassName = "boardModal"
      scrollable = {true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{bldgNo}동 게시판</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Card className="postList">
          {posts.map((post) => (
            <PostPreview key={post.id} {...post} onClick={()=>handlePostClick(post.id)}/>
          ))}
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {onShowWritePostModal}>쓰기</Button>

        <Button variant = "secondary" onClick = {handleBack}>뒤로가기</Button>
      </Modal.Footer>
    </Modal>
  }else{
    modal = <Modal
      show = {true}
      onHide = {()=>{historyPush('/')}}
      dialogClassName = "boardModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>게시판 정보가 없습니다.</Modal.Body>
    </Modal>
  }
  return (
    modal
  )
}
