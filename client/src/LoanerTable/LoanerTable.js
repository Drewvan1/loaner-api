import React from 'react'

import LoanerRow from './LoanerRow'
import LoanerHeader from './LoanerHeader'
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';

// props = plate, year/model/trim, ,isRes, isOut
const LoanerTable = ({ loaners }) => {

    const loanerArr = loaners.map((loaner, i) => {
        return  (
                <LoanerRow 
                key={loaner._id} 
                stockNum={loaner.identifiers.stockNum} 
                plate={loaner.identifiers.plate} 
                ymm={`${loaner.identifiers.year} ${loaner.identifiers.model} ${loaner.identifiers.trim}`} 
                isReserved={`${loaner.isReserved}`} isOut={`${loaner.isOut}`} 
                />)
        //return <LoanerRow />
    
    })

    return (
        <Table>
            <LoanerHeader />
            <TableBody>
                {loanerArr}
            </TableBody>
        </Table>
    )
}

export default LoanerTable