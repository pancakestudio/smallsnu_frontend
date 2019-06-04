import React from 'react'
import { Modal, Button, Form, Col } from 'react-bootstrap'
import './WritePostModal.css'

export const WritePostModal = ({bldgNo, show, isEdit, onHide, onSavePost, editPost, onEditPost}) =>{
  let titleInput, contentInput, usernameInput, passwordInput
  const handleChangeTitle = (e) => {
    titleInput = e.target.value
  }
  const handleChangeContent = (e) => {
    contentInput = e.target.value
  }
  const handleChangeUsername = (e) => {
    usernameInput = e.target.value
  }
  const handleChangePassword = (e) => {
    passwordInput = e.target.value
  }
  const handleBack = () => {
    onHide()
  }
  const handleSave = () => {
    let post = {
      "title" : titleInput,
      "content" : contentInput,
      "username" : usernameInput,
      "password" : passwordInput
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
    editPost.title = (titleInput) ? titleInput : editPost.title
    editPost.content = (contentInput) ? contentInput : editPost.content
    editPost.password = passwordInput
    onEditPost(editPost, bldgNo)
  }

  let modalTitle, title, content, username, disabled, handler

  if(isEdit){
    modalTitle = "게시글 수정"
    title = editPost.title
    content = editPost.content
    username = editPost.username
    disabled = true
    handler = handleEdit
  }else{
    modalTitle = "새로운 게시글"
    disabled = false
    handler = handleSave
  }
  return (
      <Modal
        className = "writeModal"
        show = {show}
        onHide = {handleBack}
        dialogClassName = "writePostModal"
        scrollable = {true}
        backdrop = {false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="postTitle">
              <Form.Control
                type="title"
                defaultValue={title}
                placeholder="제목"
                onChange={handleChangeTitle}
              />
            </Form.Group>

            <Form.Group controlId="postText">
              <Form.Control
                as = "textarea"
                rows = "10"
                defaultValue={content}
                placeholder="내용"
                onChange={handleChangeContent}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  className ="userName"
                  type="username"
                  disabled={disabled}
                  defaultValue={username}
                  placeholder="아이디"
                  onChange={handleChangeUsername}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  className="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={handleChangePassword}
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant = "secondary" onClick = {handler}>저장</Button>
        </Modal.Footer>
      </Modal>
  )
}
