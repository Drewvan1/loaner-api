import React from 'react'

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const LoanerRow = ({ stockNum, plate, ymm, isRes, isOut }) => {
    
    return (
        <TableRow hover role='checkbox' className='grow'>
            <TableCell align='center'>{stockNum}</TableCell>
            <TableCell align='center'>{plate}</TableCell>
            <TableCell align='center'>{ymm}</TableCell>
            <TableCell align='center'>{isRes}</TableCell>
            <TableCell align='center'>{isOut}</TableCell>
        </TableRow>
        // <TableRow>
        //     <TableCell>test</TableCell>
        //     <TableCell align='right'>test</TableCell>
        //     <TableCell align='right'>test</TableCell>
        //     <TableCell align='right'>test</TableCell>
        //     <TableCell align='right'>test</TableCell>
        // </TableRow>
    )
}

export default LoanerRow