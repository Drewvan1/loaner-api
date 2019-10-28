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
                key={loaner.vin} 
                stockNum={loaner.stockNum} 
                plate={loaner.plate} 
                ymm={`${loaner.year} ${loaner.model} ${loaner.trim}`} 
                isRes={`${loaner.isRes}`} isOut={`${loaner.isOut}`} 
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