export function addContactAction(contact) {
    return {
      type: 'ADD_CONTACT',
      payload: contact,
    };
  }
  
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
  