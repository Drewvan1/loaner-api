import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoanerTable from '../LoanerTable/LoanerTable'
// import ReservationTable from '../ReservationTable/ReservationTable'
//import NewReservationTable from '../ReservationTable/NewReservationTable'
import EnhancedReservationTable from '../ReservationTable/EnhancedReservationTable'

import { fetchReservations, fetchLoaners } from '../actions'



const mapStateToProps = (state) => {
  return {
    
    reservations: state.requestReservations.reservations,
    resIsPending: state.requestReservations.isPending,
    resError: state.requestReservations.resError,
    
    loaners: state.requestLoaners.loaners,
    loanersIsPending: state.requestLoaners.loanersIsPending,
    loanersError: state.requestLoaners.loanersError,

    searchField: state.searchVehicles.searchField
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
      onRequestReservations: () => dispatch(fetchReservations()),
      onRequestLoaners: () => dispatch(fetchLoaners())
  }
}




class LoanerPage extends Component {

  componentDidMount() {
    this.props.onRequestReservations()
    this.props.onRequestLoaners()
  }

  render() {
    const { loaners, reservations, searchField } = this.props

    //eslint-disable-next-line
    const filteredLoaners = loaners.filter(loaner => {
      const combinedString = `${loaner.identifiers.stockNum}${loaner.identifiers.plate}${loaner.identifiers.year} ${loaner.identifiers.model} ${loaner.identifiers.trim}`
        if (combinedString.toLowerCase().includes(searchField.toLowerCase())) {
          return loaner
        }
    })

    // function to sort reservations by apptTIme
    const sortedReservations = reservations.sort(function (a, b) {
      return new Date(a.apptTime).getTime() - new Date(b.apptTime).getTime()
    });

    return (
      <div>
          <LoanerTable loaners={filteredLoaners} />
          <EnhancedReservationTable reservations={sortedReservations}/>
      </div>
    )
  }
}

//export default App;

export default connect(mapStateToProps, MapDispatchToProps)(LoanerPage);