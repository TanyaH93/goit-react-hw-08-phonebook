import React from 'react';
import { Link } from 'react-router-dom';

import { routesList } from '../../routes';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const UnauthorizedNav = props => {
  const classes = useStyles();
  return (
    <Toolbar>
      <Link to={routesList.REGISTER} className={classes.link}>
        <Button color="inherit">Register</Button>
      </Link>
      <Link to={routesList.LOGIN} className={classes.link}>
        <Button color="inherit">Login</Button>
      </Link>
    </Toolbar>
  );
};

export default UnauthorizedNav;
