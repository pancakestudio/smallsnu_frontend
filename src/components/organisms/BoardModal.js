import React from 'react';
import { Modal, Card, Button, Pagination } from 'react-bootstrap'
import { PostPreview } from '../atoms/PostPreview'
import { ModalSpinner } from '../molecules/ModalSpinner'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './BoardModal.css'

export const BoardModal = ({bldgNo, posts, activePage, onPaginationClick, onShowWritePostModal}) => {
  const handleBack = () => {
    historyPush(`/building/${bldgNo}`)
  }

  const handlePostClick = (id) => {
    historyPush(`/post/${id}`)
  }
  let items = []
  let last = 1
  let start, end

  if(posts && posts.length!==0){
    last = ~~((posts.length+4)/5)

    for(let num=1; num<=last; num++){
      items.push(
        <Pagination.Item key={num} active={activePage===num} onClick={()=>{onPaginationClick(num)}}>
          {num}
        </Pagination.Item>
      )
    }
  }
  start = (activePage-1)*5
  end = start+5 < posts.length ? (start+5) : (posts.length)

  if(posts && posts.length!==0){
    return (
      <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "boardModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title className="title">{bldgNo}동 게시판</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card className="postList">
            {posts.slice(start, end).map((post) => (
              <PostPreview key={post.id} {...post} onClick={()=>handlePostClick(post.id)}/>
            ))}
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-5">
          </div>
          <div className="center col-2">
            <Pagination className="pagination">
              <Pagination.Prev onClick={()=>{onPaginationClick(activePage-1 > 0 ? activePage-1 : 1)}}/>
              {items}
              <Pagination.Next onClick={()=>{onPaginationClick(activePage+1 <= last ? activePage+1 : last)}}/>
            </Pagination>
          </div>
          <div className="col-5">
            <Button className="float-right" variant="secondary" onClick = {()=>{onShowWritePostModal(bldgNo)}}>쓰기</Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  } else if(posts){
    return (
      <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "boardModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title className="title">{bldgNo}동 게시판</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card className="postList noPosts">
            게시판에 글이 없습니다.
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <div className="col-12">
            <Button className="float-right" variant="secondary" onClick = {()=>{onShowWritePostModal(bldgNo)}}>쓰기</Button>
          </div>
        </Modal.Footer>
      </Modal>
    )
  }else{
    return (
      <ModalSpinner />
    )
  }
}
