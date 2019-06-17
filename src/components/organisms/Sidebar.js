import React from 'react'
import { Container, Row, Col, Card, Form, FormControl, Nav, ListGroup, Button } from 'react-bootstrap'
import { FaAngleRight, FaAngleLeft, FaSearch } from 'react-icons/fa'
import { getBldgCoord, getBldgNo, getNearestSpot } from '../../utils/Functions'
import './Sidebar.css'

export const Sidebar = ({show, shuttleShow, pathFind, onBack, onPathFindClick, onResClick,
  source, destination, path, onSearchSrc, onSearchDest, onPickSrc, onPickDest, onFind,
  onSemiClick, onCafeClick, onConvClick, onBankClick, onATMClick,
  onShuttleMenuClick, onShuttleClick, onRevShuttleClick,
  onSchoolShuttleClick, onMidLibShuttleClick, onMidShuttleClick, hide}) => {
  let src, dest
  const handleBack = () => {
    onBack()
  }
  const srcSearch = (e) => {
    e.preventDefault()
    let srcNo = src
    let coord = getBldgCoord(srcNo)
    if(!coord){
      srcNo = srcNo.slice(0,-1)
      coord = getBldgCoord(srcNo)
    }
    if(coord){
      const srcPos = {lat: coord[0], lng: coord[1]}
      onSearchSrc(srcNo, srcPos)
      e.target.reset()
    } else {
      alert("해당 건물번호를 가진 건물이 없습니다.")
      e.target.reset()
    }
  }
  const handleSrcChange = (e) => {
    src = e.target.value
  }
  const handlePickSrc = () => {
    onPickSrc()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const destSearch = (e) => {
    e.preventDefault()
    let destNo = dest
    let coord = getBldgCoord(destNo)
    if(!coord){
      destNo = destNo.slice(0,-1)
      coord = getBldgCoord(destNo)
    }
    if(coord){
      const destPos = {lat: coord[0], lng: coord[1]}
      onSearchDest(destNo, destPos)
      e.target.reset()
    } else {
      alert("해당 건물번호를 가진 건물이 없습니다.")
      e.target.reset()
    }
  }
  const handlePickDest = () => {
    onPickDest()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleDestChange = (e) => {
    dest = e.target.value
  }
  const handleFind = () => {
    if(source.pos && destination.pos){
      onFind(getNearestSpot(source.pos), getNearestSpot(destination.pos))
      if(window.innerWidth<=576){
        hide()
      }
    } else {
      alert("출발지와 목적지를 설정해주세요.")
    }
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
  const handleSchoolShuttleClick = () => {
    onSchoolShuttleClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleMidLibShuttleClick = () => {
    onMidLibShuttleClick()
    if(window.innerWidth<=576){
      hide()
    }
  }
  const handleMidShuttleClick = () => {
    onMidShuttleClick()
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
  let sidebar, className = "flex-column bg-light"
  let srcDefault, destDefault, srcDestInfo, pathInfo
  if(show){
    className = "active " + className
  }

  if(source && Object.keys(source).length!==0){
    if(source.pick && source.pos){
      srcDefault = getBldgNo(source.pos)+"동"
      if(srcDefault==="0동")
        srcDefault = getNearestSpot(source.pos).code
    } else if(source.bldgNo){
      srcDefault = source.bldgNo+"동"
    }
  }

  if(destination && Object.keys(destination).length!==0){
    if(destination.pick && destination.pos){
      destDefault = getBldgNo(destination.pos)+"동"
      if(destDefault==="0동")
        destDefault = getNearestSpot(destination.pos).code
    } else if(destination.bldgNo){
      destDefault = destination.bldgNo+"동"
    }
  }

  if(path && Object.keys(path).length>1){
    srcDestInfo = (
      <Row className="infoWrapper">
        <Card className="srcDestCard">
          <Card.Header as="h5">경로 정보</Card.Header>
          <Card.Body>
            <Card.Text>
              {path.src} <FaAngleRight/> {path.dest}
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    )
    pathInfo = (
      <Row className="infoWrapper">
        <Card body className="pathCard">
          <Card.Text>
            약 {path.time.slice(0,3)+"분"} | {path.length.slice(0,3)+"m"}
          </Card.Text>
        </Card>
      </Row>
    )
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
                      placeholder = "출발(건물 번호)"
                      defaultValue = {srcDefault}
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
              <Button className="srcMarker" onClick={handlePickSrc}>출발 핀 지정</Button>
              <Row className="formWrapper">
                <Form className="searchForm" onSubmit={destSearch} inline>
                  <Col xs={10} md={10} className="inputCol">
                    <FormControl
                      onChange = {handleDestChange}
                      type = "text"
                      placeholder = "도착(건물 번호)"
                      defaultValue = {destDefault}
                      className = "textInput"
                    />
                  </Col>
                  <Col xs={2} md={2} className="buttonCol">
                    <Button variant="outline-secondary" type="submit"><FaSearch/></Button>
                  </Col>
                </Form>
              </Row>
              <Button className="destMarker" onClick={handlePickDest}>도착 핀 지정</Button>
              <Row className="findWrapper">
                <Button variant="secondary" className="find" onClick={handleFind}>길찾기</Button>
              </Row>
              { srcDestInfo }
              { pathInfo }
            </Col>
            <Button className="back" onClick={handleBack}><FaAngleLeft /></Button>
          </Row>
        </Container>
      </Nav>
    )
  } else if(shuttleShow){
    sidebar = (
      <Nav id="sidebar" className={className}>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-light" action active={false} onClick={handleShuttleClick}>교내 순환 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleRevShuttleClick}>역 순환 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleSchoolShuttleClick}>통학 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleMidLibShuttleClick}>야간 도서관 셔틀</ListGroup.Item>
          <ListGroup.Item className="bg-light" action active={false} onClick={handleMidShuttleClick}>심야 셔틀</ListGroup.Item>
        </ListGroup>
      </Nav>
    )
  } else {
    sidebar = (
      <Nav id="sidebar" className={className}>
        <ListGroup variant="flush">
          <ListGroup.Item className="bg-light" action active={false} onClick={handlePathFindClick}>길찾기</ListGroup.Item>
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

  return (
    sidebar
  )
}
