import React from 'react'
import { Modal, Button, Pagination } from 'react-bootstrap'
import { SeminarList } from '../molecules/SeminarList'
import { ModalSpinner } from '../molecules/ModalSpinner'
import { FaAngleLeft } from 'react-icons/fa'
import { historyPush } from '../../utils/Functions'
import './SeminarListModal.css'

export const SeminarListModal = ({bldgNo, semis, activePage, onPaginationClick}) => {
  const handleBack = () => {
    historyPush(`/building/${bldgNo}`)
  }
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
    return (
      <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        dialogClassName = "seminarListModal"
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          <Modal.Title className="title">세미나 목록({bldgNo}동)</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SeminarList semis={semis} page={activePage} />
        </Modal.Body>
        <Modal.Footer className="footer">
          <Pagination className="pagination">
            <Pagination.Prev onClick={()=>{onPaginationClick(activePage-1 > 0 ? activePage-1 : 1)}}/>
            {items}
            <Pagination.Next onClick={()=>{onPaginationClick(activePage+1 <= last ? activePage+1 : last)}}/>
          </Pagination>
        </Modal.Footer>
      </Modal>
    )
  } else {
    return (
      <ModalSpinner />
    )
  }

}
