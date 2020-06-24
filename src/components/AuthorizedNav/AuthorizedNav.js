import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';

const AuthorizedNav = props => {
  return (
    <Toolbar>
      <Typography variant="h6">{props.userName}</Typography>
      <AccountCircle />
      <Button onClick={props.logOut} color="inherit">
        Log Out
      </Button>
      <IconButton
        onClick={props.deleteUser}
        variant="contained"
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
    </Toolbar>
  );
};

AuthorizedNav.propTypes = {
  userName: PropTypes.string,
  logOut: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default AuthorizedNav;
