export const addContactAction = (contact) => {
    // adding contacts to the firestore from user interface
    // but contacts are not displayed at the front end -user interface
  return(dispatch, state, {getFirestore}) => {
      getFirestore()
      .collection('contacts')
      .add(contact)
      .then((doc) => {
        console.log(doc);
        
        // to display data on the User interface
        // but data disppears after page refresh
        //this command is commented because to prevent double data
       // dispatch({
         //  type: 'ADD_CONTACT',
         //  payload: contact,
         //});
      });
    };   
  };
  
  export function deleteContactAction(id) {
    return {
      type: 'DELETE_CONTACT',
      payload: id,
    };
  }
  
  export function updateContactAction(id, updatedContact) {
    return {
      type: 'UPDATE_CONTACT',
      payload: { id: id, updatedContactInfo: updatedContact },
    };
  }


  // get data from firebase database 
  // include componentDidMount on App js component

  export const getAllContacts = ()=>{
    return (dispatch, state, {getFirestore}) =>{
      getFirestore()
      .collection("contacts")
     // .orderBy("")
      .onSnapshot((snapshot) =>{
        let contacts = [];
        snapshot.forEach ((doc)=>{
          contacts.push(doc.data());
        });
        console.log(contacts);
        dispatch({
          type: "SET_ALL_CONTACTS",
            payload: contacts,
        });
      },
       (err) =>{}
      );
    };
  }

  