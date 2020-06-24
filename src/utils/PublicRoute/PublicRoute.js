import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { routesList } from '../../routes';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props => {
      return isAuthenticated ? (
        <Redirect to={routesList.HOME} />
      ) : (
        <Component {...props} />
      );
    }}
  />
);

export default PublicRoute;
