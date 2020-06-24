import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { phonebookActions } from './index';

const contacts = createReducer([], {
  [phonebookActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [phonebookActions.getContactsSuccess]: (_, action) => [...action.payload],
  [phonebookActions.deleteContactSuccess]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filter = createReducer('', {
  [phonebookActions.filterContacts]: (_, action) => action.payload,
});

const error = createReducer(null, {
  [phonebookActions.addContactError]: (_, action) => action.payload,
  [phonebookActions.getContactsError]: (_, action) => action.payload,
  [phonebookActions.deleteContactError]: (_, action) => action.payload,
  [phonebookActions.removeContactsError]: (_, action) => null,
});

export default combineReducers({ contacts, filter, error });
