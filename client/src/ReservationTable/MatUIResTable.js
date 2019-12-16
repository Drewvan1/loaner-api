import React from 'react'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { deleteReservation } from '../actions'
import { objDatesToFrEndDates } from '../helpers'


const mapStateToProps = (state) => {
    return {
        reservations: state.requestReservations.reservations,
        resIsPending: state.requestReservations.isPending,
        resError: state.requestReservations.resError,
    }
}
  
const MapDispatchToProps = (dispatch) => {
    return {
        handleDelete: (deletedRowData, history) => dispatch(deleteReservation(deletedRowData, history))
    }
}

const MatUIResTable = (props) => {

    const { reservations, handleDelete, history } = props

    const sortedReservations = reservations.sort(function (a, b) {
        return new Date(a.apptTime).getTime() - new Date(b.apptTime).getTime()
    });

    const resRowData = sortedReservations.map(obj => objDatesToFrEndDates(obj))

    const columns = [
        {title: 'Appt Time', field: 'apptTime', type: 'datetime'},
        {title: 'Client Name', field: 'fullName'},
        {title: 'Requested Model', field: 'reqModel'},
        {title: 'Created By', field: 'createdBy'},
        {title: 'Created', field: 'created', type: 'datetime'},
    ]

    console.log(sortedReservations)

    return (
    
        <MaterialTable 
            columns={columns}
            data={resRowData}
            title={'Reservation Table'}
            options={{pageSize: 10}}
            editable={{
                onRowDelete: deletedRowData => new Promise((resolve, reject) => {
                    console.log(deletedRowData)
                    handleDelete(deletedRowData, history)
                    setTimeout(() => {
                        resolve()
                    }, 1000)
                })
            }}
        />

    )
}

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(MatUIResTable))