import React from 'react'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { prepLoanerRowData } from '../helpers'

const mapStateToProps = (state) => {
    return {
        loaners: state.requestLoaners.loaners,
        loanersIsPending: state.requestLoaners.loanersIsPending,
        loanersError: state.requestLoaners.loanersError,
    }
}
  
const MapDispatchToProps = (dispatch) => {
    return {
        // handleDelete: (deletedRowData, history) => dispatch(deleteReservation(deletedRowData, history))
    }
}

const MatUILoanerTable = (props) => {

    const { loaners } = props

    const loanersRowData = loaners.map(loaner => prepLoanerRowData(loaner))

    const columns = [
        {title: 'Stock Number', field: 'stockNum'},
        {title: 'Plate', field: 'plate'},
        {title: 'Year / Model / Trim / Color', field: 'ymt'},
        {title: 'Check-Out Status', field: 'status'},
    ]

    return (
    
        <MaterialTable 
            columns={columns}
            data={loanersRowData}
            title={'Loaner Table'}
            options={{pageSize: 10}}
        />

    )
}

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(MatUILoanerTable))