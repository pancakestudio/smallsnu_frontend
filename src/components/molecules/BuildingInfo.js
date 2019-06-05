import React from 'react'
import { Card, Tabs, Tab, Button } from 'react-bootstrap'
import { AmenityPreview } from '../atoms/AmenityPreview'
import { PostPreview } from '../atoms/PostPreview'
import { SemiPreview } from '../atoms/SemiPreview'
import { historyPush } from '../../utils/Functions'
import './BuildingInfo.css'

export const BuildingInfo = ({bldgNo, rests, semis, posts}) => {
  const handlePostClick = (post) => {
    historyPush(`/post/${post.id}`)
  }

  const handleBoardClick = () => {
    historyPush(`/board/${bldgNo}`)
  }

  const handleSeminarClick = (semi) => {
    historyPush(`/seminar/${semi.id}`)
  }

  const handleSeminarListClick = () => {
    historyPush(`/seminarlist/${bldgNo}`)
  }

  const handleResClick = (res) => {
    historyPush(`/restaurant/${res.id}`)
  }
  let resList, postList, semiList

  // Restaurant List
  if(rests && rests.length!==0){
    resList = (
      <Card className="resList">
        {rests.map((rest) => (
          <AmenityPreview key={rest.id} {...rest} onClick={()=>{handleResClick(rest)}}/>
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

  // Post List
  if(posts && posts.length!==0){
    postList = (
      <Card className="postList">
        {posts.slice(0, 3).map((post) => (
          <PostPreview key={post.id} {...post} onClick={()=>handlePostClick(post)}/>
        ))}
        <Card.Footer> <Button className="postListButton" variant="link" onClick={()=>{handleBoardClick()}}>게시글 더보기</Button> </Card.Footer>
      </Card>
    )
  } else {
    postList = (
      <Card className="postList">
        <Card.Body>
          <Card.Text>게시판에 글이 없습니다.</Card.Text>
        </Card.Body>
        <Card.Footer> <Button className="postListButton" variant="link" onClick={()=>{handleBoardClick()}}>게시판 바로가기</Button> </Card.Footer>
      </Card>
    )
  }

  // Seminar List
  if(semis && semis.length!==0){
    semiList = (
      <Card className="semiList">
        {semis.slice(0, 2).map((semi) => (
          <SemiPreview key={semi.id} {...semi} onClick={()=>handleSeminarClick(semi)}/>
        ))}
        <Card.Footer> <Button className="semiListButton" variant="link" onClick={()=>{handleSeminarListClick()}}>세미나 더보기</Button> </Card.Footer>
      </Card>
    )
  } else {
    semiList = (
      <Card className="semiList">
        <Card.Body>
          <Card.Text>세미나 정보가 없습니다.</Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return(
    <Tabs className="buildingResList">
      <Tab eventKey="restaurant" title="식당 정보">
        { resList }
      </Tab>
      <Tab eventKey="seminar" title="세미나 정보">
        { semiList }
      </Tab>
      <Tab eventKey="post" title="건물 게시판">
        { postList }
      </Tab>
    </Tabs>
  )
}
