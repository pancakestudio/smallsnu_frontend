import React from 'react'
import { Modal } from 'react-bootstrap'
import { RestaurantInfo } from '../molecules/RestaurantInfo'
import './RestaurantModal.css'

export const RestaurantModal = ({res, show, onModalHide}) => {
  let modal
  if(res){
      modal =
      <Modal
        show = {show}
        onHide = {onModalHide}
        scrollable = {true}
        dialogClassName = "restaurantModal"
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
