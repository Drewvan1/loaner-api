import React from 'react'

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const ReservationRow = ({ apptTime, fullName, reqModel, createdBy, created }) => {

    return (
        <TableRow hover role='checkbox' className=''>
            <TableCell align='center'>{apptTime}</TableCell>
            <TableCell align='center'>{fullName}</TableCell>
            <TableCell align='center'>{reqModel}</TableCell>
            <TableCell align='center'>{createdBy}</TableCell>
            <TableCell align='center'>{created}</TableCell>
        </TableRow>
    )
}





// const LoanerRow = ({ stockNum, plate, ymm, isRes, isOut }) => {
    
//     return (
//         <TableRow hover role='checkbox' className=''>
//             <TableCell align='center'>{stockNum}</TableCell>
//             <TableCell align='center'>{plate}</TableCell>
//             <TableCell align='center'>{ymm}</TableCell>
//             <TableCell align='center'>{isRes}</TableCell>
//             <TableCell align='center'>{isOut}</TableCell>
//         </TableRow>
//     )
// }

export default ReservationRow;