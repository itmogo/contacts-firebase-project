import React from 'react';
import ContactItem from './ContactItem';
import { connect } from 'react-redux';
//this component displays all the users we have in our users state from App.js
function ContactList(props) {
  return (
    <div>
      {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
      {props.contacts.map((contact) => (
        <ContactItem contact={contact}         
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

export default connect(mapStateToProps, {})(ContactList);
