import React from 'react'
import { Container, Row, Col, Form, FormControl, Nav, ListGroup, Button } from 'react-bootstrap'
import { FaAngleLeft, FaSearch } from 'react-icons/fa'
import SearchBar from '../../containers/SearchBar'
import './Sidebar.css'

export const Sidebar = ({show, pathFind, onBack, onPathFindClick, onResClick,
  onSemiClick, onCafeClick, onConvClick, onBankClick, onATMClick, hide}) => {
  let src, dest
  const handleBack = () => {
    onBack()
  }
  const srcSearch = (e) => {
    e.preventDefault()
    alert("Search!")
  }
  const handleSrcChange = (e) => {
    src = e.target.value
  }
  const destSearch = (e) => {
    e.preventDefault()
    alert("Search!")
  }
  const handleDestChange = (e) => {
    dest = e.target.value
  }

  const handlePathFindClick = () => {
    onPathFindClick()
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
  let sidebar, className = "flex-column bg-light"
  if(show){
    className = "active " + className
  }

  if(pathFind){
    sidebar = (
      <Nav id="pathFind" className={className}>
        <Container fluid>
          <Row className="wrapper">
            <Col xs={11} md={11} className="pick">
              <Row className="formWrapper">
                <Form className="searchForm" onSubmit={srcSearch} inline>
                  <Col xs={10} md={10} className="inputCol">
                    <FormControl
                      onChange = {handleSrcChange}
                      type = "text"
                      placeholder = "출발지"
                      className = "textInput"
                    />
                  </Col>
                  <Col xs={2} md={2} className="buttonCol">
                    <Button variant="outline-secondary" type="submit">
                      <FaSearch/>
                    </Button>
                  </Col>
                </Form>
              </Row>
              <Button className="srcMarker">출발지 핀 지정</Button>
              <Row className="formWrapper">
                <Form className="searchForm" onSubmit={destSearch} inline>
                  <Col xs={10} md={10} className="inputCol">
                    <FormControl
                      onChange = {handleDestChange}
                      type = "text"
                      placeholder = "목적지"
                      className = "textInput"
                    />
                  </Col>
                  <Col xs={2} md={2} className="buttonCol">
                    <Button variant="outline-secondary" type="submit"><FaSearch/></Button>
                  </Col>
                </Form>
              </Row>
              <Button className="destMarker">목적지 핀 지정</Button>
            </Col>
            <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          </Row>
        </Container>
      </Nav>
    )
  } else {
    sidebar = (
      <Nav id="sidebar" className={className}>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-light" action active={false} onClick={handlePathFindClick}>길찾기</ListGroup.Item>
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

  return (
    sidebar
  )
}
