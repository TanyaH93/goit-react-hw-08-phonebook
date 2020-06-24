import { createAction } from '@reduxjs/toolkit';

const getContactsRequest = createAction('contacts/getRequest');
const getContactsSuccess = createAction('contacts/getSuccess');
const getContactsError = createAction('contacts/getError');

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

const filterContacts = createAction('contacts/filterContacts');

const removeContactsError = createAction('contacts/removeError');

const phonebookActions = {
  filterContacts,

  removeContactsError,

  getContactsRequest,
  getContactsSuccess,
  getContactsError,

  addContactRequest,
  addContactSuccess,
  addContactError,

  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default phonebookActions;
