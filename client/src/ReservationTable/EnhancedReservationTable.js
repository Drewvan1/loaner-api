import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import EnhancedTableToolbar from './EnhancedTableToolbar'
import EnhancedTableHead from './EnhancedTableHead'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
// import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { stableSort, getSorting, useStyles } from './reservationTableHelpers'

import { deleteReservation } from '../actions'

const mapStateToProps = (state) => {
    return {
        
    }
  }
  
  const MapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (reservationId, history) => dispatch(deleteReservation(reservationId, history))
    }
  }

const EnhancedReservationTable = (props) => {

    console.log(props)

    const { reservations, handleDelete, history } = props

    const classes = useStyles();

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('apptTIme');
    // eslint-disable-next-line
    const [selected, setSelected] = React.useState([]);  //numSelected={selected.length}

    const handleRequestSort = (event, property) => {
        const isDesc = orderBy === property && order === 'desc';
        setOrder(isDesc ? 'asc' : 'desc');
        setOrderBy(property);
    };
     
    const handleClick = (event, reservationId) => {
        handleDelete(reservationId, history)
    };

    // const isSelected = name => selected.indexOf(name) !== -1;

    const reservationRowArray = stableSort(reservations, getSorting(order, orderBy)).map((reservation, index) => {
        // const isItemSelected = isSelected(reservation._id);
        const labelId = `enhanced-table-checkbox-${index}`;

        return (
            <TableRow hover key={reservation._id} >
                <TableCell padding="checkbox">
                    <IconButton aria-label="delete" onClick={event => handleClick(event, reservation._id)}>
                        <DeleteIcon />
                    </IconButton>
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
        <div className = {classes.root}> 
            <Paper className={classes.paper}>
                <EnhancedTableToolbar numSelected={selected.length} selected={selected} />
                <div className = {classes.tableWrapper}>
                    <Table className={classes.table}>
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

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(EnhancedReservationTable))

// export default EnhancedReservationTable