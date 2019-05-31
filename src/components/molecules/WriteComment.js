import React from 'react'
import { Button, Form, Col } from 'react-bootstrap'
import './WriteComment.css'

export const WriteComment = ({edit, editingComment, postId, onSaveComment, onEditComment}) => {
  let form, textInput, usernameInput, passwordInput
  let textDefault, usernameDefault, disabled, handler

  const handleCommentSave = (e) => {
    e.preventDefault()
    let comment = {
      "content": textInput.value,
      "username": usernameInput.value,
      "password": passwordInput.value
    }
    if(comment.contet === ""){
      alert("댓글 내용이 없습니다.")
    } else {
      onSaveComment(comment, postId)
      form.reset()
    }
  }

  const handleCommentEdit = (e) => {
    e.preventDefault()
    let comment = editingComment
    comment.content = textInput.value
    comment.username = usernameInput.value
    comment.password = passwordInput.value
    if(comment.contet === ""){
      alert("댓글 내용이 없습니다.")
    } else {
      onEditComment(comment, postId)
    }
  }

  if(edit){
    textDefault = editingComment.content
    usernameDefault = editingComment.username
    disabled = true
    handler = handleCommentEdit
  } else {
    disabled = false
    handler = handleCommentSave
  }

  return (
    <Form
      ref={(ref)=>(form=ref)}
      className="writeComment"
      onSubmit={handler}
    >
      <Form.Group controlId="commentContent">
        <Form.Control
          as="textarea"
          rows="2"
          defaultValue={textDefault}
          placeholder="댓글"
          ref = {(ref) => (textInput=ref)}
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
            ref = {(ref) => (usernameInput=ref)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="비밀번호"
            ref = {(ref) => (passwordInput=ref)}
          />
        </Form.Group>
        <Button className="float-right" variant="outline-secondary" type="submit">댓글 등록</Button>
      </Form.Row>
    </Form>
  )
}
