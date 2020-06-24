import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Input, FormHelperText, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
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

const initialState = { email: '', password: '' };

class LogInForm extends Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.logIn(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { classes } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Input
          onInput={this.handleInput}
          id="email-input"
          name="email"
          type="email"
          aria-describedby="email-helper-text"
          size="medium"
          value={this.state.email}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
        <FormHelperText id="name-helper-text">Enter email</FormHelperText>
        <Input
          onInput={this.handleInput}
          id="password-input"
          name="password"
          type="password"
          aria-describedby="password-helper-text"
          size="medium"
          value={this.state.password}
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
          disabled={!this.state.email || !this.state.password}
          className={classes.button}
          type="submit"
        >
          Log In
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(LogInForm);
