import React from 'react'

import ReservationRow from './ReservationRow'
import ReservationHeader from './ReservationHeader'
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';

// { apptTime, fullName, reqModel, createdBy, created }
const ReservationTable = ({ reservations }) => {

    const reservationArr = reservations.map((reservation, i) => {
        return  (
                <ReservationRow 
                key={reservation._id} 
                apptTime={`${new Date(reservation.apptTime).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`} 
                fullName={reservation.fullName} 
                reqModel={reservation.reqModel} 
                createdBy={reservation.createdBy} 
                created={`${new Date(reservation.created).toLocaleString(undefined, {day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit'})}`} 
                />)
    
    })

    return (
        <Table>
            <ReservationHeader />
            <TableBody>
                {reservationArr}
            </TableBody>
        </Table>
    )
}

export default ReservationTable