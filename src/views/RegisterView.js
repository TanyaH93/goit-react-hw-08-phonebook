import React from 'react';

import { Typography } from '@material-ui/core';

import RegisterForm from '../components/RegisterForm';

const RegisterView = props => {
  return (
    <>
      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        align="center"
        paragraph={true}
      >
        Enter your e-mail, login and password:
      </Typography>
      <RegisterForm />
    </>
  );
};

export default RegisterView;
