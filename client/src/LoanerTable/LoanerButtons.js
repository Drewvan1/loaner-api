import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const LoanerButtons = () => {
  const classes = useStyles();

  return (
    <div>
        <Button variant="contained" color="secondary" className={classes.button}>
            Loaner Out
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
            Loaner Check-In
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Reserve Loaner
        </Button>
        <Button variant="contained" color="primary" className={classes.button}>
            Un-Reserve Loaner
        </Button>
        <Button variant="contained" className={classes.button}>
            Add Loaner
        </Button>
        <Button variant="contained" className={classes.button}>
            Delete Loaner
        </Button>
    </div>
  );
}

export default LoanerButtons;
