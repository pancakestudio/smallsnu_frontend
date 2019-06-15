import React from 'react'
import { Nav, ListGroup } from 'react-bootstrap'
import './Sidebar.css'

export const Sidebar = ({show, onResClick, onSemiClick, onCafeClick, onConvClick, onBankClick, onATMClick, hide}) => {
  let className
  if(show){
    className = "active flex-column bg-light"
  } else {
    className = "flex-column bg-light"
  }
  const handleSemiClick = () => {
    onSemiClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleResClick = () => {
    onResClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleCafeClick = () => {
    onCafeClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleConvClick = () => {
    onConvClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleBankClick = () => {
    onBankClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleATMClick = () => {
    onATMClick()
    if(window.innerWidth<=576){
      hide()
    }
  }

  return (
    <Nav id="sidebar" className={className}>
      <ListGroup variant="flush">
        <ListGroup.Item className="bg-light" action active={false}>길찾기</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false}>셔틀 버스</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleSemiClick}>세미나</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleResClick}>식당</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleCafeClick}>카페</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleConvClick}>편의점</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleBankClick}>은행</ListGroup.Item>
        <ListGroup.Item className="bg-light" action active={false} onClick={handleATMClick}>ATM</ListGroup.Item>
      </ListGroup>
    </Nav>
  )
}
