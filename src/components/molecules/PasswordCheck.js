import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import './PasswordCheck.css'

export const PasswordCheck = ({show, target, onHideModal, onDeletePost, onDeleteComment}) => {
  let passwordInput
  const handleSubmit = (e) => {
    e.preventDefault()
    const password = passwordInput.value
    if("building" in target){
      const bldgNo = target.building.code
      onDeletePost(target, bldgNo, password)
    } else {
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
            <Form.Control type="password" placeholder="비밀번호" ref = {(ref) => (passwordInput=ref)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" type="submit" onClick = {handleSubmit}>삭제</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}
