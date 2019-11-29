import React from 'react'

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const LoanerHeader = () => {
    return (
        <TableHead>
            <TableRow>  
                <TableCell align='center'>Stock Number</TableCell>
                <TableCell align="center">Plate</TableCell>
                <TableCell align="center">Year/Model/Trim</TableCell>
                {/* <TableCell align="center">Reservation Status</TableCell> */}
                <TableCell align="center">Check-Out Status</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default LoanerHeader