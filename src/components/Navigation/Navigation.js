import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { routesList } from '../../routes';

import UnauthorizedNav from '../UnauthorizedNav';
import AuthorizedNav from '../AuthorizedNav';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: theme.spacing(2),
  },
  navLinkActive: {
    color: pink,
  },
}));

const Navigation = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              to={routesList.HOME}
              className={classes.navLink}
              activeClassName={classes.navLinkActive}
            >
              HOME
            </NavLink>
            {props.isAuthenticated && (
              <NavLink
                to={routesList.CONTACTS}
                className={classes.navLink}
                activeClassName={classes.navLinkActive}
              >
                CONTACTS
              </NavLink>
            )}
          </Typography>
          {props.isAuthenticated ? <AuthorizedNav /> : <UnauthorizedNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Navigation;
