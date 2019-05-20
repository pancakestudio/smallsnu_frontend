import React from 'react'
import { Modal, Pagination } from 'react-bootstrap'
import { SeminarList } from '../molecules/SeminarList'
import './SeminarListModal.css'

export const SeminarListModal = ({semis, activePage, show, onSeminarClick, onModalHide, onPaginationClick}) => {
  let items = []
  let last = 1

  if(semis && semis.length!==0){
    last = ~~((semis.length+2)/3)

    for(let num=1; num<=last; num++){
      items.push(
        <Pagination.Item key={num} active={activePage===num} onClick={()=>{onPaginationClick(num)}}>
          {num}
        </Pagination.Item>
      )
    }
  }
  return (
    <Modal
      show = {show}
      onHide = {onModalHide}
      dialogClassName = "seminarListModal"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>세미나 목록</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <SeminarList semis={semis} page={activePage} onSeminarClick={onSeminarClick} />
        <div>
          <Pagination className="justify-content-center">
            <Pagination.Prev onClick={()=>{onPaginationClick(activePage-1 > 0 ? activePage-1 : 1)}}/>
            {items}
            <Pagination.Next onClick={()=>{onPaginationClick(activePage+1 <= last ? activePage+1 : last)}}/>
          </Pagination>
        </div>
      </Modal.Body>
    </Modal>
  )
}
