import React from 'react'
import { Card, Tabs, Tab, Button } from 'react-bootstrap'
import { BuildingRes } from '../atoms/BuildingRes'
import { BuildingPost } from '../atoms/BuildingPost'
import './BuildingInfo.css'

export const BuildingInfo = ({rests, semis, posts}) => {
  let resList, postList
  if(rests && rests.length!==0){
    resList = (
      <Card className="resList">
        {rests.map((rest, index) => (
          <BuildingRes key={rest.id} {...rest}/>
        ))}
      </Card>
    )
  } else {
    resList = (
      <Card className="resList">
        <Card.Body>
          <Card.Text>식당 정보가 없습니다.</Card.Text>
        </Card.Body>
      </Card>
    )
  }
  if(posts && posts.length!==0){
    postList = (
      <Card className="postList">
        {posts.map((post, index) => (
          <BuildingPost key={post.id} {...post}/>
        ))}
        <Card.Footer> <Button variant="link">게시판 바로가기</Button> </Card.Footer>
      </Card>
    )
  } else {
    postList = (
      <Card className="postList">
        <Card.Body>
          <Card.Text>게시판에 글이 없습니다.</Card.Text>
        </Card.Body>
      </Card>
    )
  }
  return(
    <Tabs className="buildingResList">
      <Tab eventKey="restaurant" title="식당 정보">
        { resList }
      </Tab>
      <Tab eventKey="post" title="건물 게시판">
        { postList }
      </Tab>
    </Tabs>
  )
}
