import React from 'react';
import { Modal } from 'react-bootstrap'
import WriteComment from '../../containers/WriteComment'
import './EditCommentModal.css'

export const EditCommentModal = ({show, comment, onHideModal}) => {
  return (
    <Modal
      show = {show}
      onHide = {onHideModal}
      backdrop = {false}
      dialogClassName = "editCommentModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>댓글 수정</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <WriteComment edit={true} editingComment={comment} postId={comment.post}/>
      </Modal.Body>
    </Modal>
  )
}
