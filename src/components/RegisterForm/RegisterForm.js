import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, FormHelperText, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import EmailIcon from '@material-ui/icons/Email';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  form: {
    display: 'block',
    width: '100%',
    maxWidth: 200,
    margin: '0 auto',
    marginBottom: '24px',
  },
  button: {
    display: 'block',
    margin: '0 auto',
  },
};

const initialState = {
  email: '',
  name: '',
  password: '',
};

class RegisterForm extends Component {
  static propTypes = {
    addUser: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { classes } = this.props;
    return (
      <form
        autocomplete="off"
        className={classes.form}
        onSubmit={this.handleSubmit}
      >
        <Input
          id="email-input"
          name="email"
          type="email"
          minLength={5}
          aria-describedby="email-helper-text"
          size="medium"
          onInput={this.handleInput}
          startAdornment={
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          }
        />
        <FormHelperText id="email-helper-text">Enter e-mail</FormHelperText>

        <Input
          id="name-input"
          name="name"
          type="string"
          aria-describedby="name-helper-text"
          size="medium"
          onInput={this.handleInput}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <FormHelperText id="name-helper-text">Enter login</FormHelperText>

        <Input
          id="password-input"
          name="password"
          type="password"
          aria-describedby="password-helper-text"
          size="medium"
          onInput={this.handleInput}
          startAdornment={
            <InputAdornment position="start">
              <VpnKeyIcon />
            </InputAdornment>
          }
        />
        <FormHelperText id="password-helper-text">
          Enter password
        </FormHelperText>
        <Button
          variant="outlined"
          color="primary"
          disabled={
            !this.state.email || !this.state.name || !this.state.password
          }
          className={classes.button}
          type="submit"
        >
          Register
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(RegisterForm);
