import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import './PasswordCheck.css'

export const PasswordCheck = ({show, target, onHideModal, onDeletePost, onDeleteComment}) => {
  let passwordInput
  const handleChange = (e) => {
    passwordInput = e.target.value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const password = passwordInput
    if(target && "building" in target){
      const bldgNo = target.building.code
      onDeletePost(target, bldgNo, password)
    } else if(target && "post" in target) {
      const postId = target.post
      onDeleteComment(target, postId, password)
    }
  }

  return(
    <Modal
      show = {show}
      onHide = {onHideModal}
      backdrop = {false}
      size = "sm"
      dialogClassName = "passwordCheck"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>비밀번호 확인</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formGridPassword">
            <Form.Control
              type="password"
              placeholder="비밀번호"
              onChange={handleChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick = {handleSubmit}>삭제</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
