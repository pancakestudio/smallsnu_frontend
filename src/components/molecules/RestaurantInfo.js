import React from 'react'
import { Card, Tabs, Tab } from 'react-bootstrap'
import { ResPreview } from '../atoms/ResPreview'
import { EtcPreview } from '../atoms/EtcPreview'
import './RestaurantInfo.css'

export const RestaurantInfo = (res) => {
  let op_hours, etc
  if(res){
    op_hours = (
      <Card className="op_hours border-0">
        <ResPreview/>
      </Card>
    )
    etc = (
      <Card className = "etc border-0">
        <EtcPreview/>
      </Card>
    )
  }else{
    op_hours = (
      <Card className="op_hours border-0">
        <Card.Body>
          <Card.Text>운영 시간 정보가 없습니다.</Card.Text>
        </Card.Body>
      </Card>
    )
    etc = (
      <Card className = "etc border-0">
        <Card.Body>
          <Card.Text>정보가 없습니다. </Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return(
    <Tabs className="restaurantList">
      <Tab eventKey = "operating_hours" title = "운영 시간">
        { op_hours }
      </Tab>
      <Tab eventKey = "etc" title = "기타 정보">
        { etc }
      </Tab>
    </Tabs>
  )
}
