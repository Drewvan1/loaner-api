import React from 'react';
import PropTypes from 'prop-types';

import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// import { desc, stableSort, getSorting } from './reservationTableHelpers'

const headCells = [
  { id: 'fullName', numeric: false, disablePadding: true, label: 'Client Name' },
  { id: 'apptTime', numeric: true, disablePadding: false, label: 'Appointment Time' },
  { id: 'reqModel', numeric: false, disablePadding: false, label: 'Preferred Vehicle' },
  { id: 'createdBy', numeric: false, disablePadding: false, label: 'Reserved By' },
  { id: 'created', numeric: true, disablePadding: false, label: 'Reservation Created' },
];

function EnhancedTableHead(props) {
  // need to get the vars below to drop down from the parent
  const { classes, order, orderBy, onRequestSort } = props;  //numSelected
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  const headCellArr = headCells.map(headCell => (
    <TableCell key={headCell.id} align={headCell.numeric ? 'right' : 'left'} padding={headCell.disablePadding ? 'none' : 'default'} sortDirection={orderBy === headCell.id ? order : false}>
      <TableSortLabel active={orderBy === headCell.id} direction={order} onClick={createSortHandler(headCell.id)}>
        {headCell.label}
        {orderBy === headCell.id ? (
          <span className={classes.visuallyHidden}>
            {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
          </span>
        ) : null}
      </TableSortLabel>
    </TableCell>
  ))


  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" />
        {headCellArr}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default EnhancedTableHead