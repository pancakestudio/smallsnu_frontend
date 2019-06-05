import React from 'react'
import { Modal, Spinner } from 'react-bootstrap'
import './ModalSpinner.css'

export const ModalSpinner = ({show}) => {
  return (
    <Modal
      show = {(show !== undefined) ? show : true}
      dialogClassName = "loadingModal"
      centered
    >
      <div className="spinnerWrapper">
        <Spinner className="spinner" animation="grow" variant="light"/>
      </div>
    </Modal>
  )
}
