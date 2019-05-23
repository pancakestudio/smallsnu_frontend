import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { RestaurantInfo } from '../molecules/RestaurantInfo'
import { historyPush } from '../../utils/Functions'
import './RestaurantModal.css'

export const RestaurantModal = ({res}) => {
  let modal
  if(res){
      modal = <Modal
        show = {true}
        onHide = {()=>{historyPush('/')}}
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{res.kr_name}</Modal.Title>
        </Modal.Header>

      <Modal.Body>
        <h5> 식당 정보 </h5>
        <p> restaurant information should be included in the backend </p>
        <RestaurantInfo
          res={res}
        />
      </Modal.Body>
    </Modal>
  }else{
     modal = <Modal
       show = {true}
       onHide = {()=>{historyPush('/')}}
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title>식당 정보가 없습니다.</Modal.Title>
       </Modal.Header>
       <Modal.Body>
       정보없음. 암튼 그럼.
       </Modal.Body>
       <Modal.Footer>
       </Modal.Footer>
   </Modal>
 }
   return modal
}
