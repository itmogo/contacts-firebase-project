import React, { useState } from "react";
import { connect } from "react-redux";
import { updateContactAction } from "../actions/contactActions";
import { Button, Form } from "react-bootstrap";

//user sign up component

  function EditContactForm(props) {
  // default user state is an object with empty string as value
  const[state, setState] = useState({
    contactname: props.contact.contactname,
    email: props.contact.email,
    password: props.contact.password,
    country: props.contact.country,
  });

  //a function that get called anytime an input field changes
  function handleOnChange(event) {
    //event.target.name hold the name of the input that changed
    //event.target.value hold the new value of the input field that changed

    //we update the user state with the new value
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }

  //this function will be called the the create user button is clicked on
  function handleSubmit() {
    //we call addUser function passed to this user form component
    //as a prop from the App component

    let contact = { ...state, id: props.contact.id };
    props.updateContactAction(props.contact.id, contact);
    props.hideModal();
  }

  return (
    <div>
      <form>
        <div>
          <Form.Group>
            <Form.Label>Contact Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter contact name"
              name="contactname"
              value={state.contactname} //the value will the same as data in the state
              onChange={handleOnChange} //we setup onchange to call our handle onchange function
              required
            />
          </Form.Group>
        </div>
        <br />
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={state.email}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={state.country}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Enter country"
            required
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <br />
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleOnChange} //we setup onchange to call our handle onchange function
            placeholder="Your password..."
            required
          />
        </Form.Group>
        <br />
        <div>
          {/* the create user button call the handleSubmit functon when clicked */}
          <Button type="button" variant="primary" onClick={handleSubmit}>
            Update Contact 
          </Button>
        </div>
      </form>
    </div>
  );
}

let mapDispatchToProps = {
  updateContactAction,
};

let mapStateToProps = () => {};
export default connect(mapStateToProps, mapDispatchToProps)(EditContactForm);
