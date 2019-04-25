import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import './Header.css'

const Header = () => (
  <Navbar className="header" collapseOnSelect bg="light" variant="light" expand="lg" fixed="top">
    <Button id="sidebarCollapse" className="menu" variant="light"><FaBars /></Button>  
    <Navbar.Brand href="#home" className="title"> SMALL SNU </Navbar.Brand>
    <Nav className="mr-auto"> </Nav>
    <Form inline className="pull-right">
      <FormControl type="text" placeholder="건물 번호" className="mr-sm-2" />
      <Button variant="outline-secondary">검색</Button>
    </Form>
  </Navbar>
)

export default Header
