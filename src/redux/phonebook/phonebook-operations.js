import * as contactsAPI from '../../services/contacts-api';
import * as contactsActions from './phonebook-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContacts = (name, number) => async dispatch => {
  dispatch(contactsActions.addContactsRequest());
  try {
    const newContact = await contactsAPI.addContact(name, number);
    dispatch(contactsActions.addContactsSuccess(newContact));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error));
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());
  try {
    await contactsAPI.deleteContact(id);
    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error));
  }
};
