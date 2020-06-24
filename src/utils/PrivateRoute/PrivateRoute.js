import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import { routesList } from '../../routes';

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={routesList.HOME} />
      );
    }}
  />
);

export default PrivateRoute;
