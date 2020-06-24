import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Input,
  FormHelperText,
  InputAdornment,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
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
};

const initialState = { name: '', number: '' };

class ContactsForm extends React.Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    newContact: PropTypes.func.isRequired,
    duplicatedContactError: PropTypes.func.isRequired,
  };

  state = {
    ...initialState,
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (
      this.props.list.some(
        elem => elem.name.toLowerCase() === this.state.name.toLowerCase(),
      )
    ) {
      return this.props.duplicatedContactError(
        Error(`You already have contact with name ${this.state.name}`),
      );
    }
    this.props.newContact(this.state);
    this.setState({ ...initialState });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Typography
          variant="h3"
          component="h3"
          gutterBottom
          align="center"
          paragraph={true}
        >
          Create your contacts here:
        </Typography>
        <form
          className={classes.form}
          size="medium"
          onSubmit={this.handleSubmit}
        >
          <Input
            id="name-input"
            name="name"
            type="string"
            onInput={this.handleInput}
            aria-describedby="my-helper-text"
            size="medium"
            value={this.state.name}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
          <FormHelperText id="name-helper-text">Enter name</FormHelperText>

          <Input
            id="phone-input"
            name="number"
            type="number"
            minLength={7}
            onInput={this.handleInput}
            aria-describedby="my-helper-text"
            size="medium"
            value={this.state.number}
            startAdornment={
              <InputAdornment position="start">
                <AddIcCallIcon />
              </InputAdornment>
            }
          />
          <FormHelperText id="phone-helper-text">Enter phone</FormHelperText>
          <Button
            variant="outlined"
            color="primary"
            disabled={!this.state.name || !this.state.number}
            type="submit"
          >
            Add Contact
          </Button>
        </form>
      </>
    );
  }
}

export default withStyles(styles)(ContactsForm);
