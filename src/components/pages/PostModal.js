import React from 'react'
import moment from 'moment'
import { Modal, Button, Dropdown, DropdownButton, Card, ListGroup, Container, Row, Col } from 'react-bootstrap'
import { FaAngleLeft, FaHeart, FaRegComment } from 'react-icons/fa'
import { ModalSpinner } from '../molecules/ModalSpinner'
import WriteComment from '../../containers/WriteComment'
import { historyPush, trimCreated } from '../../utils/Functions'
import './PostModal.css'

export const PostModal = ({post, onShowWritePostModal, onEdit, onDelete, onLike, onEditComment, onDeleteComment, onLikeComment}) => {
  const handleBack = () => {
    if(post && post.building){
      const boardNo = post.building.code
      historyPush(`/board/${boardNo}`)
    }
  }
  const handleEdit = () => {
    onEdit(post, post.building.code)
  }
  const handleDelete = () => {
    onDelete(post)
  }
  const handleLike = () => {
    let liked = localStorage.getItem("likedPosts")
    liked = (liked) ? JSON.parse(liked) : []
    if(liked.includes(post.id)){
      alert('이미 추천한 게시글입니다.')
    } else {
      onLike(post.id)
      liked.push(post.id)
      localStorage.setItem("likedPosts", JSON.stringify(liked))
    }
  }
  const handleEditComment = (comment) => {
    onEditComment(comment)
  }
  const handleDeleteComment = (comment) => {
    onDeleteComment(comment)
  }
  const handleLikeComment = (commentId) => {
    let liked = localStorage.getItem("likedComments")
    liked = (liked) ? JSON.parse(liked) : []
    if(liked.includes(commentId)){
      alert('이미 추천한 댓글입니다.')
    } else {
      onLikeComment(commentId, post.id)
      liked.push(commentId)
      localStorage.setItem("likedComments", JSON.stringify(liked))
    }
  }

  let comments, body
  if(post && post.comments){
    if(post.comments.length!==0){
      body = 
      <Card.Body className="commentsBody">
        <ListGroup variant="flush">
          {post.comments.map(com => (
            <ListGroup.Item key={com.id}> 
              <Container fluid>
                <Row>
                  <Col xs={10} md={10} className="commenter text-muted">
                    {com.username} | {trimCreated(com.created)}<br/>
                  </Col>
                  <Col xs={2} md={2} className="configure text-right">
                    <DropdownButton
                      key={com.id}
                      title=""
                      alignRight
                      variant="outline-secondary"
                      drop="down"
                    >
                      <Dropdown.Item
                        as="button"
                        className="editComment"
                        onClick={()=>{handleEditComment(com)}}
                      >
                        수정
                      </Dropdown.Item>
                      <Dropdown.Item
                        as="button"
                        className="deleteComment"
                        onClick={()=>{handleDeleteComment(com)}}
                      >
                        삭제
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                </Row>
                <Row>
                  {com.content}<br/>
                </Row>
                <Row>
                  <Button
                    className="likeComment"
                    onClick={()=>handleLikeComment(com.id)}
                  >
                    <FaHeart /> {com.like}
                  </Button>
                </Row>
              </Container>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    }

    comments =
    <Card className="comments border-left-0 border-right-0 border-bottom-0">
      <Card.Header className="commentsHeader">
        <FaRegComment className="commentIcon"/>{post.comments.length}
      </Card.Header>
      {body}
    </Card>
  }

  if(post && Object.keys(post).length>0){
    return (
      <Modal
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
          <Card className="mainText border-0">
            <Card.Header className="postHeader text-muted">
              <Container fluid>
              <Row>
                <Col xs={12} md={8} className="headerLeft">
                  작성자: {post.username} | 작성일시: {moment(post.created).format("YYYY.MM.DD HH:mm:ss")}
                </Col>
                <Col xs={12} md={4} className="headerRight text-right">
                  <Button variant = "secondary" onClick={handleEdit}>수정</Button>
                  <Button variant = "danger" onClick={handleDelete}>삭제</Button>
                </Col>
              </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              <Card.Text className="postContent">
                {post.content}
              </Card.Text>
              <div className="text-center">
                <Button
                  variant="outline-danger"
                  className="like text-center"
                  onClick={handleLike}
                >
                  <FaHeart/><br/>{post.like}
                </Button>
              </div>
            </Card.Body>
          </Card>
          { comments }
        </Modal.Body>
        <Modal.Footer className="postFooter">
          <WriteComment className="writeComment" postId={post.id}/>
        </Modal.Footer>
      </Modal>
    )
  }else{
    return (
      <ModalSpinner />
    )
  }
}
