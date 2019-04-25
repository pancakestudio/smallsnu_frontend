import React from 'react'
import { Nav, ListGroup } from 'react-bootstrap'
import './Sidebar.css'

const Sidebar = () => (
  <Nav id="sidebar" className="flex-column bg-light">
    <ListGroup variant="flush">
      <ListGroup.Item className="bg-light" action active={false}>길찾기</ListGroup.Item>
      <ListGroup.Item className="bg-light" action active={false}>셔틀 버스</ListGroup.Item>
      <ListGroup.Item className="bg-light" action active={false}>세미나</ListGroup.Item>
      <ListGroup.Item className="bg-light" action active={false}>강의실 예약</ListGroup.Item>
      <ListGroup.Item className="bg-light" action active={false}>식당</ListGroup.Item>
    </ListGroup>
  </Nav>
)

export default Sidebar
