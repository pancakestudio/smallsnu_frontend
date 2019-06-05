import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import SearchBar from '../../containers/SearchBar'
import './Header.css'

export const Header = ({onMenuClick}) => {
  return (
  <Navbar className="header" collapseOnSelect bg="light" variant="light" expand="lg" fixed="top">
    <Button className="menu" variant="light" onClick={onMenuClick}><FaBars /></Button>
    <Navbar.Brand href="/" className="title"> SMALL SNU </Navbar.Brand>
    <Nav className="mr-auto"> </Nav>
    <SearchBar />
  </Navbar>
  )
}
