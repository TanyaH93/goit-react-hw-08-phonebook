import React from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    textAlign: 'center',
    margin: theme.spacing(2),
  },
}));

const HomeView = () => {
  const classes = useStyles();
  return (
    <Box>
      <Typography
        variant="h3"
        component="h3"
        gutterBottom
        className={classes.text}
      >
        Welcome to our Phonebook App!
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.text}>
        Please, register or LogIn for continue using app.
      </Typography>
    </Box>
  );
};

// class HomeView extends Component {
//   render() {

//   }
// }

export default HomeView;
