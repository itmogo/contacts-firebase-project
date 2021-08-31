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
        dispatch({
           type: 'ADD_CONTACT',
           payload: contact,
         });
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
  