import React from 'react'
import { Card, Tabs, Tab, Button } from 'react-bootstrap'
import { ResPreview } from '../atoms/ResPreview'
import { PostPreview } from '../atoms/PostPreview'
import { SemiPreview } from '../atoms/SemiPreview'
import './BuildingInfo.css'

export const BuildingInfo = ({rests, semis, posts, onPostClick, onSeminarClick, onPostListClick, onSeminarListClick}) => {
  let resList, postList, semiList

  // Restaurant List
  if(rests && rests.length!==0){
    resList = (
      <Card className="resList">
        {rests.map((rest) => (
          <ResPreview key={rest.id} {...rest}/>
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
        {posts.slice(-3).reverse().map((post) => (
          <PostPreview key={post.id} {...post} onClick={()=>onPostClick(post)}/>
        ))}
        <Card.Footer> <Button className="postListButton" variant="link" onClick={()=>{onPostListClick(posts)}}>게시글 더보기</Button> </Card.Footer>
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

  // Seminar List
  if(semis && semis.length!==0){
    semiList = (
      <Card className="semiList">
        {semis.slice(0, 2).map((semi) => (
          <SemiPreview key={semi.id} {...semi} onClick={()=>onSeminarClick(semi)}/>
        ))}
        <Card.Footer> <Button className="semiListButton" variant="link" onClick={()=>{onSeminarListClick(semis)}}>세미나 더보기</Button> </Card.Footer>
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
