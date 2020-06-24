import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Container from '@material-ui/core/Container';

import { routesList } from './routes';
import { authOperations, authSelectors } from './redux/auth';
import { phonebookOperations } from './redux/phonebook';
import phonebookAPI from './utils/api/phonebookAPI';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import Navigation from './components/Navigation';
import Notification from './components/Notification';
import Loading from './utils/Loading';

class App extends Component {
  static propTypes = {
    token: PropTypes.string,
  };

  componentDidMount() {
    if (this.props.token) {
      phonebookAPI.token.set(this.props.token);
      this.props.getUser();
      this.props.getContacts();
    }
  }

  render() {
    return (
      <Container fixed maxWidth="md">
        <Suspense fallback={<Loading />}>
          <Notification />
          <Navigation />
          <Switch>
            <Route
              path={routesList.HOME}
              exact
              component={lazy(() => import('./views/HomeView'))}
            />
            <PrivateRoute
              path={routesList.CONTACTS}
              component={lazy(() => import('./views/ContactsView'))}
            />
            <PublicRoute
              path={routesList.LOGIN}
              component={lazy(() => import('./views/LoginView'))}
            />
            <PublicRoute
              path={routesList.REGISTER}
              component={lazy(() => import('./views/RegisterView'))}
            />
            <Redirect to={routesList.HOME} />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { token: authSelectors.getToken(state) };
};

export default connect(mapStateToProps, {
  getUser: authOperations.getUser,
  getContacts: phonebookOperations.getContacts,
})(App);
