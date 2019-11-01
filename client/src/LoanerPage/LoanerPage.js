import React, { Component } from 'react';
import { connect } from 'react-redux'

import LoanerTable from '../LoanerTable/LoanerTable'
import ReservationTable from '../ReservationTable/ReservationTable'

import { fetchReservations, fetchLoaners } from '../actions'

const mapStateToProps = (state) => {
  return {
    
    reservations: state.requestReservations.reservations,
    resIsPending: state.requestReservations.isPending,
    resError: state.requestReservations.resError,
    
    //loaners: loaners  // now coming from loaner seed file => will need to make ajax call to db to retrieve json in future
    loaners: state.requestLoaners.loaners,
    loanersIsPending: state.requestLoaners.loanersIsPending,
    loanersError: state.requestLoaners.loanersError
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
    const { loaners, reservations } = this.props

    // eslint-disable-next-line
    // const filteredLoaners = loaners.filter(loaner => {
    //   const combinedString = `${loaner.identifiers.stockNum}${loaner.identifiers.plate}${loaner.identifiers.year} ${loaner.identifiers.model} ${loaner.identifiers.trim}`
    //     if (combinedString.toLowerCase().includes(searchField.toLowerCase())) {
    //       return loaner
    //     }
    // })

    // function to sort reservations by apptTIme
    const sortedReservations = reservations.sort(function (a, b) {
      return new Date(a.apptTime).getTime() - new Date(b.apptTime).getTime()
    });

    return (
      <div>
          <LoanerTable loaners={loaners} />
          <ReservationTable reservations={sortedReservations}/>
      </div>
    )
  }
}

//export default App;

export default connect(mapStateToProps, MapDispatchToProps)(LoanerPage);