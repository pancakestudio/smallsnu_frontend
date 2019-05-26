import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { RestaurantInfo } from '../molecules/RestaurantInfo'
import { historyPush } from '../../utils/Functions'
import './RestaurantModal.css'

export const RestaurantModal = ({res}) => {
  let header, body
  if(res){
    header = (
      <Modal.Header closeButton>
        <Modal.Title>{res.kr_name}</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body>
        <h5> 식당 정보 </h5>
        <p> restaurant information should be included in the backend </p>
        <RestaurantInfo res={res}/>
      </Modal.Body>
    )
  } else {
    header = (
      <Modal.Header closeButton>
        <Modal.Title>식당 정보가 없습니다.</Modal.Title>
      </Modal.Header>
    )
    body = (
      <Modal.Body>
        정보없음. 암튼 그럼.
      </Modal.Body>
    )
  }
 return(
   <Modal
     show = {true}
     onHide = {()=>{historyPush('/')}}
     dialogClassName = "restaurantModal"
     scrollable = {true}
     centered
   >
     {header}
     {body}
   </Modal>
 )
}
