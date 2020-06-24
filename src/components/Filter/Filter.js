import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

const mainBackground = blueGrey[50];

const styles = {
  field: {
    backgroundColor: '#fff',
  },
  wrapper: {
    backgroundColor: mainBackground,
    padding: 20,
    marginBottom: 24,
  },
  container: {
    margin: '0 auto',
    maxWidth: 200,
  },
};

class Filter extends Component {
  static propTypes = {
    filterFromState: PropTypes.string,
    sendFilter: PropTypes.func.isRequired,
  };

  handleInput = event => {
    this.props.sendFilter(event.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <TextField
            name="filter"
            onInput={this.handleInput}
            value={this.props.filterFromState}
            className={classes.field}
            id="outlined-helperText"
            label="Filter contacts"
            placeholder="Input Filter"
            variant="outlined"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Filter);
