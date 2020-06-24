import phonebookActions from './phonebookActions';
import phonebookAPI from '../../utils/api/phonebookAPI';

const addContact = contact => dispatch => {
  dispatch(phonebookActions.addContactRequest());
  phonebookAPI
    .addContact(contact)
    .then(response =>
      dispatch(phonebookActions.addContactSuccess(response.data)),
    )
    .catch(error => phonebookActions.addContactError(error));
};

const getContacts = () => dispatch => {
  dispatch(phonebookActions.getContactsRequest());
  phonebookAPI
    .getContacts()
    .then(response =>
      dispatch(phonebookActions.getContactsSuccess(response.data)),
    )
    .catch(error => dispatch(phonebookActions.getContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(phonebookActions.deleteContactRequest());
  phonebookAPI
    .deleteContact(id)
    .then(response => {
      dispatch(phonebookActions.filterContacts(''));
      dispatch(phonebookActions.deleteContactSuccess(id));
    })
    .catch(error => dispatch(phonebookActions.deleteContactError(error)));
};

const filterContacts = filter => dispatch => {
  dispatch(phonebookActions.filterContacts(filter));
};

export default { addContact, getContacts, deleteContact, filterContacts };
