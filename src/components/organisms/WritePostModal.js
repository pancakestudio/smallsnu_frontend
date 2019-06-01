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
      alert("비밀번호가 올바르지 않습니다.")
    }else{
      editPost.title = titleInput.value
      editPost.content = textInput.value
      onEditPost(editPost, bldgNo)
    }
  }

  let modalTitle, title, content, username, titlePlaceholder, contentPlaceholder, usernamePlaceholder, disabled, handler

  if(isEdit){
    modalTitle = "게시글 수정"
    title = editPost.title
    content = editPost.content
    username = editPost.username
    disabled = true
    handler = handleEdit
  }else{
    modalTitle = "새로운 게시글"
    titlePlaceholder = "제목"
    contentPlaceholder = "내용"
    usernamePlaceholder = "아이디"
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
                placeholder={titlePlaceholder}
                ref = {(ref) => (titleInput=ref)}
              />
            </Form.Group>

            <Form.Group controlId="postText">
              <Form.Control
                as = "textarea"
                rows = "10"
                defaultValue={content}
                placehoder={contentPlaceholder}
                ref = {(ref) => (textInput=ref)}
              />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control
                  className ="userName"
                  disabled={disabled}
                  defaultValue={username}
                  placeholder="아이디"
                  ref = {(ref) => (userNameInput=ref)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control
                  className="password"
                  placeholder="비밀번호"
                  ref = {(ref) => (passwordInput=ref)}
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
