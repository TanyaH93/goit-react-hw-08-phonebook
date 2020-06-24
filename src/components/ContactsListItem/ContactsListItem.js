import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  link: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 360,
    margin: '0 auto',
    backgroundColor: '#fff',
  },
}));

const ContactsListItem = props => {
  const classes = useStyles();
  return (
    <ListItem divider className={classes.link}>
      <Typography variant="subtitle1">
        {props.name} : {props.number}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => props.deleteContact(props.id)}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
