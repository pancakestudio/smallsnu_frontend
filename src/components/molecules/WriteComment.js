import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import './WriteComment.css'

export const WriteComment = ({edit, editingComment, postId, onSaveComment, onEditComment}) => {
  let contentInput, usernameInput, passwordInput
  let contentDefault, usernameDefault, passwordDefault, disabled, handler

  const handleChangeContent = (e) => {
    contentInput = e.target.value
  }

  const handleChangeUsername = (e) => {
    usernameInput = e.target.value
  }

  const handleChangePassword = (e) => {
    passwordInput = e.target.value
  }

  const handleCommentSave = (e) => {
    if(e) {
      e.preventDefault()
      e.target.reset()
    }
    let comment = {
      "content": contentInput,
      "username": usernameInput,
      "password": passwordInput
    }
    if(comment.contet === ""){
      alert("댓글 내용이 없습니다.")
    } else {
      onSaveComment(comment, postId)
    }
  }

  const handleCommentEdit = (e) => {
    if(e) {
      e.preventDefault()
      e.target.reset()
    }
    let comment = editingComment
    comment.content = (contentInput) ? contentInput : editingComment.content
    comment.username = (usernameInput) ? usernameInput : editingComment.username
    comment.password = passwordInput
    if(comment.contet === ""){
      alert("댓글 내용이 없습니다.")
    } else {
      onEditComment(comment, postId)
    }
  }

  if(edit){
    contentDefault = editingComment.content
    usernameDefault = editingComment.username
    disabled = true
    handler = handleCommentEdit
  } else {
    disabled = false
    handler = handleCommentSave
  }

  return (
    <Form
      className="writeComment"
      onSubmit={handler}
    >
      <Form.Group controlId="commentContent">
        <Form.Control
          as="textarea"
          rows="2"
          defaultValue={contentDefault}
          placeholder="댓글"
          onChange={handleChangeContent}
        />
      </Form.Group>
      <Form.Row className="commenterForm">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="userName"
            defaultValue={usernameDefault}
            disabled={disabled}
            placeholder="아이디"
            onChange={handleChangeUsername}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            onChange={handleChangePassword}
          />
        </Form.Group>
        <Button className="float-right" variant="outline-secondary" type="submit">댓글 등록</Button>
      </Form.Row>
    </Form>
  )
}
