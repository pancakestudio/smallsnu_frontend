import React from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import { historyPush } from '../../utils/Functions'
import './WritePostModal.css'

export const WritePostModal = ({bldgNo, show, onSavePost}) =>{
  let titleInput, textInput
  const handleBack = () => {
    historyPush(`/board/${bldgNo}`)
  }
  const handleSave = () => {
    let post = {
      "title" : titleInput.value,
      "content" : textInput.value
    }
    onSavePost(post, bldgNo)
  }

  return (
    <Modal
      show = {show}
      onHide = {()=>{historyPush('/')}}
      dialogClassName = "writePostModal"
      scrollable = {true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title> 새로운 게시글 </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group controlId="postTitle">
            <Form.Control
              type="title"
              placeholder="Title"
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

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant = "secondary" onClick = {handleSave}>저장</Button>
        <Button variant = "secondary" onClick = {handleBack}>뒤로가기</Button>
      </Modal.Footer>
    </Modal>
  )
}
