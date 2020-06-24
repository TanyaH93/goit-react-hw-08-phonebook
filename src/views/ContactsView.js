import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { phonebookSelectors } from '../redux/phonebook';
import ContactsForm from '../components/ContactsForm';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter';

const ContactsView = props => {
  return (
    <>
      <ContactsForm />
      {props.contacts.length > 1 && <Filter />}
      {props.contacts.length > 0 && <ContactsList />}
    </>
  );
};

ContactsView.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = state => {
  return { contacts: phonebookSelectors.getAllContacts(state) };
};

export default connect(mapStateToProps)(ContactsView);
