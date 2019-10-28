import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

// test data, needs to be eliminated when api connected
import { loaners } from './loaners'
//import { reservations } from './reservations'

import Paper from '@material-ui/core/Paper';

import LoanerTable from './LoanerTable/LoanerTable'
import ReservationTable from './ReservationTable/ReservationTable'
// import LoanerHeader from './LoanerTable/LoanerHeader';
import LoanerButtons from './LoanerTable/LoanerButtons'
import SearchBox from './LoanerTable/SearchBox';

import { setSearchField, fetchReservations } from './actions'

const mapStateToProps = (state) => {
  return {
    // from reducers.js
    searchField: state.searchVehicles.searchField,
    
    reservations: state.requestReservations.reservations,
    isPending: state.requestReservations.isPending,
    resError: state.requestReservations.resError,
    
    loaners: loaners  // now coming from loaner seed file => will need to make ajax call to db to retrieve json in future
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
      // onRequestReservations: () => fetchReservations(dispatch)
      onRequestReservations: () => dispatch(fetchReservations())
  }
}




class App extends Component {

  componentDidMount() {
    this.props.onRequestReservations()
  }

  render() {

    const { loaners, onSearchChange, searchField, reservations } = this.props
    
    // function to filter loaner table for searchbox values
    
    // eslint-disable-next-line
    const filteredLoaners = loaners.filter(loaner => {
      const combinedString = `${loaner.stockNum}${loaner.plate}${loaner.year} ${loaner.model} ${loaner.trim}`
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
        <Paper>
          <nav>
            <h1>
              Van's Honda Loaner App
            </h1>
            <LoanerButtons />
            <SearchBox onSearchChange = {onSearchChange}/>
            {/* Login Info */}
          </nav>
          <LoanerTable loaners={filteredLoaners} />
          <ReservationTable reservations={sortedReservations}/>
        </Paper>
      </div>
    )
  }
}

//export default App;

export default connect(mapStateToProps, MapDispatchToProps)(App);