import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './PostPWCheck.css'

export const PostPWCheck = () => {
  let passwordInput
  
  return(
    <Modal
      show = {true}
      onHide = {() =>{historyPush('/')}}
      dialogClassName = "PostPWCheck"
      centered
    >
      <Modal.Header>
        <Modal.Title>비밀번호 확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formGridPassword">
          <Form.Control type="password" placeholder="비밀번호" ref = {(ref) => (passwordInput=ref)}/>
        </Form.Group>
      </Modal.Body>
    </Modal>
  )
}
