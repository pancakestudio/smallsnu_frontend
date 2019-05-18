import React from 'react'
import { Card, Tabs, Tab, Button} from 'react-bootstrap'
import { ResPreview } from '../atoms/ResPreview'
import { EtcPreview } from '../atoms/EtcPreview'
import './RestaurantInfo.css'

export const RestaurantInfo = (resInfo) => {
  let op_hours, etc
  if(resInfo){
    op_hours = (
      <Card className="op_hours">
        <ResPreview/>
      </Card>
    )
    etc = (
      <Card className = "etc">
        <EtcPreview/>
      </Card>
    )
  }else{
    op_hours = (
      <Card className="op_hours">
        <Card.Body>
          <Card.Text>운영 시간 정보가 없습니다.</Card.Text>
        </Card.Body>
      </Card>
    )
    etc = (
      <Card className = "etc">
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
