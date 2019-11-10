import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import rootPage from './rootPage/rootpage'
import LoanerPage from './LoanerPage/LoanerPage'
import ReservationForm from './ReservationForm/ReservationForm'

// import LoanerHeader from './LoanerTable/LoanerHeader';
import Navbar from './Navbar/Navbar'

const mapStateToProps = (state) => {
  return {
    // from reducers.js
    
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
      
  }
}




class App extends Component {

  render() {
    // const { loaners, onSearchChange, searchField, reservations } = this.props
    // function to filter loaner table for searchbox values
    // eslint-disable-next-line

    return (
      <div className="container">
        <BrowserRouter>
          <Route path='/' component={Navbar} />
            {/* <SearchBox onSearchChange = {onSearchChange}/> */}
          <Route exact path='/' component={rootPage} />
          <Route exact path='/loaners' component={LoanerPage} />
          <Route exact path='/reservations/new' component={ReservationForm} />
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(App);