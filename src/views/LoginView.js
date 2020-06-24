import React from 'react';

import { Typography } from '@material-ui/core';

import LogInForm from '../components/LogInForm';

const LoginView = props => {
  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        align="center"
        paragraph={true}
      >
        Enter your login and password:
      </Typography>
      <LogInForm />
    </>
  );
};

export default LoginView;
