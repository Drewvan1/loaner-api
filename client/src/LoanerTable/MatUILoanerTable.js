import React from 'react'
import MaterialTable from 'material-table'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { prepLoanerRowData } from '../helpers'

// import { AddBoxIcon } from '@material-ui/icons/AddBox';

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
            detailPanel={loanersRowData => {
                return (
                    <h1>{loanersRowData.identifiers.stockNum} - AUTOMATIC DATA GOES HERE</h1>
                )
            }}
            actions={[
                {
                    icon: 'add',
                    tooltip: 'Add Loaner',
                    isFreeAction: true,
                    onClick: (e) => {
                        alert('you clicked me')
                    },

                },
                {
                    icon: 'assignment',
                    tooltip: 'Check-Out Loaner',
                    onClick: (e, rowData) => {
                        alert('you want to check out a loaner')
                        console.log(e, rowData)
                    }
                    // disabled: true -> when already checked out
                },
                {
                    icon: 'check',
                    tooltip: 'Check-In Loaner',
                    onClick: (e, rowData) => {
                        alert('check in')
                        console.log(e, rowData)
                    }
                    // disabled: true 
                    // rowData => ({
                    //     icon: 'delete',
                    //     tooltip: 'Delete User',
                    //     onClick: (event, rowData) => confirm("You want to delete " + rowData.name),
                    //     disabled: rowData.birthYear < 2000
                    //   })


                }
            ]}
        />

    )
}

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(MatUILoanerTable))