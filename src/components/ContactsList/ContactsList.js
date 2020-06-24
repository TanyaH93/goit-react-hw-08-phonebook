import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactsListItem from '../ContactsListItem';

import { withStyles } from '@material-ui/core/styles';

import { Typography, List } from '@material-ui/core';
import blueGrey from '@material-ui/core/colors/blueGrey';

const mainBackground = blueGrey[50];

const styles = {
  root: {
    width: '100%',
    maxWidth: 540,
    backgroundColor: mainBackground,
    margin: '0 auto',
  },
};

class ContactsList extends Component {
  static propTypes = {
    filteredContacts: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          align="center"
          paragraph={true}
        >
          Your contacts
        </Typography>
        <List
          component="ul"
          aria-label="main mailbox folders"
          className={classes.root}
        >
          {this.props.filteredContacts.map(elem => (
            <ContactsListItem key={elem.id} id={elem.id} />
          ))}
        </List>
      </>
    );
  }
}

export default withStyles(styles)(ContactsList);
