import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

import './App.css';

import rootPage from './rootPage/rootpage'
import LoanerPage from './LoanerPage/LoanerPage'
import ReservationForm from './ReservationForm/ReservationForm'
import checkoutForm from './CheckoutForm/CheckoutForm'
import checkinForm from './CheckinForm/CheckinForm'

import Navbar from './Navbar/Navbar'


const mapStateToProps = (state) => {
  return {
    // from reducers.js

    user: state.requestUser.user
  }
}

const MapDispatchToProps = (dispatch) => {
  return {
      
  }
}




class App extends Component {

  render() {

    return (
      <div className="container">
          <Route path='/' component={Navbar} />
          {this.props.user ? 
            <Route exact path='/' component={LoanerPage} /> : 
            <Route exact path='/' component={rootPage} />
          }
          <Route exact path='/reservations/new' component={ReservationForm} />
          <Route exact path='/loaners/checkout' component={checkoutForm}/>
          <Route exact path='/loaners/checkin' component={checkinForm}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, MapDispatchToProps)(withRouter(App));