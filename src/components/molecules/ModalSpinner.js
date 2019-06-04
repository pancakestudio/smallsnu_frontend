import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import './ModalSpinner.css'

export const ModalSpinner = () => {
  return (
    <Modal
      show = {true}
      dialogClassName = "loadingModal"
      centered
    >
      <div className="spinnerWrapper">
        <Spinner className="spinner" animation="grow" variant="light"/>
      </div>
    </Modal>
  )
}
