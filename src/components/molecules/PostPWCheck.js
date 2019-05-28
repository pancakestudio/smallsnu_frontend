import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './PostPWCheck.css'

export const PostPWCheck = ({show, post, bldgNo, onHideModal, onDelete}) => {
  let passwordInput
  const handleSubmit = () => {
    if(post.password === passwordInput.value){
      onDelete(post, bldgNo)
      onHideModal()
    }else{
      alert('비밀번호가 틀렸습니다')
    }
  }
  const handleBack = () => {
    onHideModal()
  }

  return(
    <Modal
      show = {show}
      onHide = {() =>{historyPush('/')}}
      dialogClassName = "PostPWCheck"
      centered
    >
      <Modal.Header closeButton>
      <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
        <Modal.Title>비밀번호 확인</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formGridPassword">
          <Form.Control type="password" placeholder="비밀번호" ref = {(ref) => (passwordInput=ref)}/>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick = {handleSubmit}>확인</Button>
      </Modal.Footer>
    </Modal>
  )
}
