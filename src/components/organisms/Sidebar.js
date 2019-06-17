import React from 'react'
import { Nav, ListGroup, Dropdown, DropdownButton } from 'react-bootstrap'
import './Sidebar.css'

export const Sidebar = ({show, shuttleShow ,onResClick, onSemiClick, onCafeClick,
  onConvClick, onBankClick, onATMClick, onShuttleMenuClick, onShuttleClick,onRevShuttleClick, hide}) => {
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
  const handleShuttleClick = () => {
    onShuttleClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleRevShuttleClick = () => {
    onRevShuttleClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleShuttleMenuClick = () => {
    onShuttleMenuClick()
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
  if(shuttleShow){
    return(
      <Nav id="sidebar" className={className}>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-light" action active={false} onClick={handleShuttleClick}>교내 순환 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleRevShuttleClick}>역 순환 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false}>통학 셔틀</ListGroup.Item>
        </ListGroup>
      </Nav>
    )
  }
  else {
    return (
      <Nav id="sidebar" className={className}>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-light" action active={false}>길찾기</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleShuttleMenuClick}>셔틀 버스</ListGroup.Item>
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
}
