import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import { useToolbarStyles } from './reservationTableHelpers'

// from parent component will need to pass down function for onDelete and the reservation Id's from the reservations
  
  const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    
  
    const onDelete = (e) => {
      console.log('clicked!')
      const result = window.confirm('Are you sure you want to delete these reservations?')
      console.log(result)  // result will be either true (clicked: ok) or false (clicked: cancel)
      // console.log(newSelected)  // this would be the variable that would hold the reservation Id's.  need to make this a class.
    }
  
    return (
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography className={classes.title} color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography className={classes.title} variant="h6" id="tableTitle">
            UPCOMING LOANER RESERVATIONS
          </Typography>
        )}
  
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            {/* so i can get the onClick function to fire, but how do i know what row is clicked?????????????? */}
            <IconButton aria-label="delete" onClick={e => onDelete(e)}>
              {/* <DeleteIcon /> */}
              <span>D</span>
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="filter list">
              {/* <FilterListIcon /> */}
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };

export default EnhancedTableToolbar