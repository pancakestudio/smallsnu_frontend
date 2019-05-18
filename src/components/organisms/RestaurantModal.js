import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { RestaurantInfo } from '../molecules/RestaurantInfo'
import './RestaurantModal.css'

export const RestaurantModal = ({resInfo, show, onModalHide}) => {
  console.log(resInfo);
  let modal
  if(resInfo){
      modal = < Modal
        show = {show}
        onHide = {onModalHide}
        scrollable = {true}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{resInfo.kr_name}</Modal.Title>
        </Modal.Header>

      <Modal.Body>
        <h5> 식당 정보 </h5>
        <p> restaurant information should be included in the backend </p>
        <RestaurantInfo
          resInfo={resInfo}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant = "secondary" onClick = {onModalHide}> Close</Button>
      </Modal.Footer>

    </Modal>
  }else{
     modal = < Modal
       show = {show}
       onHide = {onModalHide}
       centered
     >
       <Modal.Header closeButton>
         <Modal.Title>식당 정보가 없습니다.</Modal.Title>
       </Modal.Header>
   </Modal>
 }
   return modal
}
