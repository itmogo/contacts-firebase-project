const initalState = { contacts: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initalState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      let newContacts = [...state.contacts, action.payload];
      return { contacts: newContacts };

    case 'DELETE_CONTACT':
      var id = action.payload;
      let contactsAfterDelete = state.contacts.filter((contact) => contact.id !== id);
      return { contacts: contactsAfterDelete };

    case 'UPDATE_CONTACT':
      // eslint-disable-next-line no-redeclare
      var id = action.payload.id;
      let updatedContactInfo = action.payload.updatedContactInfo;
      let contactsAfterUpdate = state.contacts.map((contact) => {
        if (contact.id === id) {
          return updatedContactInfo;
        }
        return contact;
      });
      return { contacts: contactsAfterUpdate };
      // assist in displaying data from firestore to UI frontend  
      case 'SET_ALL_CONTACTS':
        return {contacts: action.payload};

    default:
      return state;
  }
}
