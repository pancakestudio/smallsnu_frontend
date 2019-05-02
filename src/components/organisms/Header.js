import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { getBldgCoord } from '../../utils/Functions'
import SearchBar from '../../containers/SearchBar'
import './Header.css'

export const Header = () => {
  return (
  <Navbar className="header" collapseOnSelect bg="light" variant="light" expand="lg" fixed="top">
    <Button id="sidebarCollapse" className="menu" variant="light"><FaBars /></Button>
    <Navbar.Brand href="#home" className="title"> SMALL SNU </Navbar.Brand>
    <Nav className="mr-auto"> </Nav>
    <SearchBar />
  </Navbar>
  )
}

