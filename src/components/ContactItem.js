import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import EditContactForm from "./EditContactForm";
import { connect } from "react-redux";
import { deleteContactAction } from "../actions/contactActions";
import "./form.css";

//this component represents a single user that's displayed in the
//userlist component
function ContactItem(props){
  const [isModalVisible, setShowModal] = useState(false);

  function showModal() {
    setShowModal(true);
  }

  function hideModal() {
    setShowModal(false);
  }
  //we accept the user a prop and display the user's information
  return (
    <div className="row item_down">
      <div className="col-md-3">
        <b>Contact Name</b>
        <br />
        <div className="col-md-3">{props.contact.contactname}</div>
      </div>
      <div className="col-md-3">
        <b>Email</b>
        <br />
        <div className="col-md-3">{props.contact.email}</div>
      </div>
      <div className="col-md-3">
        <b>Country</b>
        <br />
        <div className="col-md-3">{props.contact.country}</div>
      </div>

      <div className="col-md-3">
        <p className="col-md-3 ">
          <b>Action</b>
          <div className="down">
            <Button
              variant="success btn-xs"
              className="editbtn action"
              onClick={showModal}
            >
              Update</Button>
            {/* We setup edit user modal */}

            <Modal show={isModalVisible} onHide={hideModal}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Contact</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <EditContactForm contact={props.contact} hideModal={hideModal} />
              </Modal.Body>
            </Modal>
            <Button
              variant="danger btn-xs"
              className="action"
              onClick={() => {
                props.deleteContactAction(props.contact.id);
              }}
            >
              Delete
            </Button>
          </div>
        </p>
      </div>
    </div>
  );
}

let mapDispatchToProps = {
  deleteContactAction,
};

let mapStateToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
