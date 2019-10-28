import React from 'react'

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const ReservationHeader = () => {
    return (
        <TableHead>
            <TableRow>  
                <TableCell align='center'>Appt Time</TableCell>
                <TableCell align="center">Client Name</TableCell>
                <TableCell align="center">Requested Model</TableCell>
                <TableCell align="center">Created By</TableCell>
                <TableCell align="center">Created</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default ReservationHeader