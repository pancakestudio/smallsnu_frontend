import React, { PropTypes, Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import './Modal.css'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import Map from './Map'

class buildingModal extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleHide = this.handleHide.bind(this);
  }

  render(){
    console.log("building Modal Show!");
    return(
    <Modal
      show = {this.props.modalShow}
      onHide = {this.handleHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Building No.{this.props.building_no}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick = {this.handleHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
  }
  handleHide = () => {
    this.props.dispatch(actions.modalHide(false));
  }
}

const mapStateToProps = (state) => {
  return{
    modalShow : state.buildingButton.modalShow
  }
}

export default connect(mapStateToProps)(buildingModal);
