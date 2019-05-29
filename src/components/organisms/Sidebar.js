import React from 'react'
import { Nav, ListGroup } from 'react-bootstrap'
import './Sidebar.css'

export const Sidebar = ({show, onResClick, onSemiClick, onCafeClick, onConvClick, onBankClick, onATMClick}) => {
  let className
  if(show){
    className = "active flex-column bg-light"
  } else {
    className = "flex-column bg-light"
  }

  return (
    <Nav id="sidebar" className={className}>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-light" action active={false}>길찾기</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false}>셔틀 버스</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false}>강의실 예약</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onSemiClick}>세미나</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onResClick}>식당</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onCafeClick}>카페</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onConvClick}>편의점</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onBankClick}>은행</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={onATMClick}>ATM</ListGroup.Item>
      </ListGroup>
    </Nav>
  )
}
