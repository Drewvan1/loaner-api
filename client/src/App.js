import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

// test data, needs to be eliminated when api connected
//import { loaners } from './loaners'
//import { reservations } from './reservations'

//import Paper from '@material-ui/core/Paper';

import rootPage from './rootPage/rootpage'
import LoanerPage from './LoanerPage/LoanerPage'

// import LoanerHeader from './LoanerTable/LoanerHeader';
import Navbar from './Navbar/Navbar'

import { setSearchField } from './actions'

const mapStateToProps = (state) => {
  return {
    // from reducers.js
    searchField: state.searchVehicles.searchField,
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
      // onRequestReservations: () => fetchReservations(dispatch)
  }
}




class App extends Component {

  render() {
    // const { loaners, onSearchChange, searchField, reservations } = this.props
    // function to filter loaner table for searchbox values
    // eslint-disable-next-line

    return (
      <div className="container">
          <Navbar />
            {/* <SearchBox onSearchChange = {onSearchChange}/> */}
          <BrowserRouter>
            <div>
              <Route exact path='/' component={rootPage} />
              <Route path='/loaners' component={LoanerPage}/>
            </div>
          </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);