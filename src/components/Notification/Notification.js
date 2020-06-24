import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Notification(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.removeUserError();
    props.removeContactsError();
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={Boolean(props.userError || props.contactsError)}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.userError || props.contactsError}>
          <div className={classes.paper}>
            <label htmlFor="icon-button-file" className={classes.closeButton}>
              <IconButton
                onClick={handleClose}
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <CloseIcon />
              </IconButton>
            </label>
            <h2 id="transition-modal-title">
              There is an error during operation
            </h2>
            <p id="transition-modal-description">
              {props.userError && props.userError.message}
              {props.contactsError && props.contactsError.message}
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

Notification.propTypes = {
  userError: PropTypes.object,
  contactsError: PropTypes.object,
};

export default Notification;
