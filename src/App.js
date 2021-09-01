//import logo from './logo.svg';
import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './components/form.css';
import { getAllContacts } from './actions/contactActions';
import React, {Component} from 'react';
import {connect} from 'react-redux';


export class App extends Component {

  //display data from firestore 
  // display data on UI front end
  componentDidMount(){
    this.props.getAllContacts();
  }

  render(){
    return (
      <div style={{                 
        backgroundImage: `url("back1.jpg")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"     
      }}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
          <h4>Contacts Form</h4>
            <ContactForm />
          </div>
  
          <div className="col-md-7">
          <h4>Contacts List</h4>
            <ContactList />
          </div>
        </div>
      </div>
      </div>  
    );
  }
}

  const mapStateToProps = (state)=>({
    contacts: state.contacts,
  });

  const mapDispatchToProps ={
    getAllContacts,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(App);
 

