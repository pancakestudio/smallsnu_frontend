import React from 'react';
import { Modal, Card, Tabs, Tab, ListGroup, Button } from 'react-bootstrap'
import { PostPreview } from '../atoms/PostPreview'
import './PostBoardModal.css'

export const PostBoardModal = ({show, onModalHide, posts, onPostClick,
  onShowBuildingModal, onShowWritePostModal}) => {
  let modal
  if(posts && posts.length!==0){
    modal = <Modal
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "postBoardModal"
      scrollable = {true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>게시판</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="postList">
          {posts.map((post) => (
            <PostPreview key={post.id} {...post} onClick={()=>onPostClick(post)}/>
          ))}
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant = "secondary" onClick = {onShowWritePostModal}>쓰기</Button>

        <Button variant = "secondary" onClick = {onShowBuildingModal}>뒤로가기</Button>
      </Modal.Footer>
    </Modal>
  }else{
    modal = <Modal
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "postBoardModal"
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
