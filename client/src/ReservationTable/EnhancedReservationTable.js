import React from 'react';
// import { connect, useSelector } from 'react-redux'
// import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import EnhancedTableToolbar from './EnhancedTableToolbar'
import EnhancedTableHead from './EnhancedTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';


import { stableSort, getSorting, useStyles } from './reservationTableHelpers'

// const mapStateToProps = (state) => {
//     return {
        
//     }
//   }
  
//   const MapDispatchToProps = (dispatch) => {
//     return {

//     }
//   }

const EnhancedReservationTable = ({ reservations }) => {

    const classes = useStyles();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('apptTIme');
    const [selected, setSelected] = React.useState([]);  //numSelected={selected.length}

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };
     
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }

        console.log(newSelected)  // this has the Id's of the reservations in it.  
        setSelected(newSelected);
    };

    const isSelected = name => selected.indexOf(name) !== -1;

    const reservationRowArray = stableSort(reservations, getSorting(order, orderBy)).map((reservation, index) => {
        const isItemSelected = isSelected(reservation._id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
            <TableRow hover onClick={event => handleClick(event, reservation._id)} role="checkbox" aria-checked={isItemSelected} tabIndex={-1} key={reservation._id} selected={isItemSelected}>
              <TableCell padding="checkbox">
                <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
              </TableCell>
              <TableCell component="th" id={labelId} scope="row" padding="none">
                {reservation.fullName}
              </TableCell>
              <TableCell align="right">{`${new Date(reservation.apptTime).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`}</TableCell>
              <TableCell align="left">{reservation.reqModel}</TableCell>
              <TableCell align="left">{reservation.createdBy}</TableCell>
              <TableCell align="right">{`${new Date(reservation.created).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`}</TableCell>
            </TableRow>
        );
    })

    return(
        <div ClassName = {classes.root}> 
            <Paper>
                    {/* // Will need to pass down function for onDelete and the reservation Id's from the reservations selected to EnhancedTableToolbar */}
                <EnhancedTableToolbar numSelected={selected.length}/>
                <div ClassName = {classes.tableWrapper}>
                    <Table>
                        <EnhancedTableHead classes={classes} numSelected={selected.length} order={order} orderBy={orderBy} onRequestSort={handleRequestSort}/>
                        <TableBody>
                            {reservationRowArray}
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        </div>
        )
}

//export default connect(mapStateToProps, MapDispatchToProps)(EnhancedReservationTable)

export default EnhancedReservationTable