import React from 'react'
import { Modal, Button, Form, FormControl, Row, Col } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './WritePostModal.css'

export const WritePostModal = ({bldgNo, show, isEdit, onSavePost, editPost, onEditPost}) =>{
  let titleInput, textInput, userNameInput, passwordInput
  const handleBack = () => {
    historyPush(`/board/${bldgNo}`)
  }
  const handleSave = () => {
    let post = {
      "title" : titleInput.value,
      "content" : textInput.value,
      "username" : userNameInput.value,
      "password" : passwordInput.value
    }
    if(post.title === "" || post.content === ""){
      alert("게시물에 내용이 없습니다.")
    }else if(post.userName === "" || post.password === ""){
      alert("아이디와 비밀번호를 입력해주세요.")
    }else{
      onSavePost(post, bldgNo)
    }
  }
  const handleEdit = () => {
    if(passwordInput.value !== editPost.password){
      alert("비밀번호가 맞지 않습니다.")
    }else{
      editPost.title = titleInput.value
      editPost.content = textInput.value
      onEditPost(editPost, bldgNo)
    }
  }

  if(isEdit){
    return (
      <Modal
        show = {show}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "writePostModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title> 수정할 게시글 </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Control type="title" defaultValue = {editPost.title} ref = {(ref) => (titleInput=ref)}/>
            </Form.Group>

            <Form.Group controlId="postText">
              <Form.Control as = "textarea" defaultValue = {editPost.content} rows = "10" ref = {(ref) => (textInput=ref)}/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="userName" defaultValue = {editPost.username} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="비밀번호" ref = {(ref) => (passwordInput=ref)}/>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant = "secondary" onClick = {handleEdit}>수정</Button>
        </Modal.Footer>
      </Modal>
    )
  }else{
    return (
      <Modal
        show = {show}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "writePostModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
        <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title> 새로운 게시글 </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Control
                type="title"
                placeholder="제목"
                ref = {(ref) => (titleInput=ref)}
              />
            </Form.Group>

            <Form.Group controlId="postText">
              <Form.Control
                as = "textarea"
                rows = "10"
                placehoder = "text"
                ref = {(ref) => (textInput=ref)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="userName" placeholder="아이디" ref = {(ref) => (userNameInput=ref)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="비밀번호" ref = {(ref) => (passwordInput=ref)}/>
              </Form.Group>
            </Form.Row>


          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant = "secondary" onClick = {handleSave}>저장</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
