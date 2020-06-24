import { createSelector } from 'reselect';

const getAllContacts = state => state.phonebook.contacts;

const getPhonebookFilter = state => state.phonebook.filter;

const getVisibleContacts = createSelector(
  [getAllContacts, getPhonebookFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

const contactsError = state => state.phonebook.error;

const getContactById = createSelector(
  [getAllContacts, (_, id) => id],
  (contacts, id) => contacts.find(item => item.id === id),
);

export default {
  getAllContacts,
  getContactById,
  getVisibleContacts,
  getPhonebookFilter,
  contactsError,
};
