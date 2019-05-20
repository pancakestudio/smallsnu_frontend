import React from 'react'
import { Modal, Button, Form, FormControl } from 'react-bootstrap'
import './WritePostModal.css'

export const WritePostModal = ({bldgNo, show, onModalHide, onShowPostList, onSavePost}) =>{
  let titleInput, textInput
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
      onHide = {onModalHide}
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
        <Button variant = "secondary" onClick = {onShowPostList}>뒤로가기</Button>
      </Modal.Footer>
    </Modal>
  )
}
