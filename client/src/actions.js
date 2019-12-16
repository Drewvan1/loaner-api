import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_RESERVATIONS_PENDING, REQUEST_RESERVATIONS_SUCCESS, REQUEST_RESERVATIONS_FAILED,
    DELETE_RESERVATIONS_PENDING, DELETE_RESERVATIONS_SUCCESS, DELETE_RESERVATIONS_FAILED,
    REQUEST_LOANERS_PENDING, REQUEST_LOANERS_SUCCESS, REQUEST_LOANERS_FAILED,
    REQUEST_USER_PENDING, REQUEST_USER_SUCCESS, REQUEST_USER_FAILED,
    POST_RESERVATION_PENDING, POST_RESERVATION_SUCCESS, POST_RESERVATION_FAILED,
    POST_OUTTRIP_PENDING, POST_OUTTRIP_SUCCESS, POST_OUTTRIP_FAILED,
    POST_INTRIP_PENDING, POST_INTRIP_SUCCESS, POST_INTRIP_FAILED
} from './constants'

// library to help AJAX calls
import axios from 'axios'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})
//const apiServer = 'http://localhost:5000/reservations'  // no longer need this, set up proxy server in setupProxy.js file
//const apiServer = '/reservations'

// need to use a higher order function here (eg function returning a function) because a typical action return is an object but
//  redux-thunk is looking for a function.  when it sees that it knows the code may be asynchronous and therefore will listen for the promise response

//****************************************************************
//              RESERVATION ACTIONS
//****************************************************************
// ========== FETCH RESERVATIONS FOR RESERVATION TABLE  ==========
export const fetchReservations = () => (dispatch) => {
    dispatch({ type: REQUEST_RESERVATIONS_PENDING })
    axios.get('/api/reservations')
        .then(res => dispatch({ type: REQUEST_RESERVATIONS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: REQUEST_RESERVATIONS_FAILED, payload: err }))
}

// ========== POST RESERVATION TO DB SCHEMA 'RESERVATIONS' ==========
export const postReservation = (reservation, history) => (dispatch) => {
    // refactored -> reqModel is now the entire loaner object in JSON format
    // const { fullName, reqModel, apptTime } = reservation
    
    dispatch({type: POST_RESERVATION_PENDING})
    console.log(reservation)
    axios.post('/api/reservations/', reservation)
        .then(res => dispatch({type: POST_RESERVATION_SUCCESS, payload: res.data}))
        .then(setTimeout(function(){ history.push('/') }, 1000))
        .catch(err => dispatch({type: POST_RESERVATION_FAILED, payload: err}))   
}

// ========== DELETE RESERVATION ROUTE EG DELETE ROUTE TO CHANGE isActive PROPERTY TO false ==========
export const deleteReservation = (reservation, history) => (dispatch) => {
    // const result = window.confirm('Are you sure you want to delete these reservations?')
    
    // if (result === false) {
    //     return
    // }
    dispatch({type: DELETE_RESERVATIONS_PENDING})
    console.log(reservation, history)
    axios.put('/api/reservations', { reservationId: reservation._id, stockNum: reservation.stockNum, loanerId: reservation.loanerId })
        .then(res => dispatch({type: DELETE_RESERVATIONS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: DELETE_RESERVATIONS_FAILED, payload: err})) 
}

//****************************************************************
//              LOANER ACTIONS
//****************************************************************

// ========== FETCH LOANERS FOR LOANER TABLE  ==========
export const fetchLoaners = () => (dispatch) => {
    dispatch({type: REQUEST_LOANERS_PENDING})
    axios.get('/api/loaners')
        .then(res => dispatch({type: REQUEST_LOANERS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: REQUEST_LOANERS_FAILED, payload: err}))
}

//****************************************************************
//              USER ACTIONS
//****************************************************************

// ========== FETCH USER FOR NAVBAR JSX RENDERING  ==========
export const fetchUser = () => (dispatch) => {
    dispatch({type: REQUEST_USER_PENDING})
    axios.get('/api/current_user')
        .then(res => dispatch({type: REQUEST_USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: REQUEST_USER_FAILED, payload: err}))
}

// MAY NOT NEED -> PASS LOANERS DOWN FRM STATE ========== FETCH AVAILABLE LOANERS FOR CHECK-OUT FORM ==========


//****************************************************************
//              TRIP ACTIONS
//****************************************************************

// ========== POST DATA FROM CHECK-OUT FORM TO DB SCHEMA 'TRIPS' ==========
export const postOutTrip = (outTrip, history) => (dispatch) => {
    console.log(outTrip)
    // const { agreementNum, customer, outDamage, outDate, outFuel, outMiles, ro, _id } = outTrip
    dispatch({type: POST_OUTTRIP_PENDING})
    axios.post('/api/trip/out', outTrip)
        .then(res => dispatch({type: POST_OUTTRIP_SUCCESS, payload: res.data}))
        // CURRENTLY HAVE AN ISSUE WHERE POST ROUTE SENT THEN GOING BACK TO HOME EG '/' HAPPENS TOO QUICKLY, DB HAS NOT UPDATED  TO SHOW THAT VEHICLE IS OUT
        .then(setTimeout(function(){ history.push('/') }, 1000))
        .catch(err => dispatch({type: POST_OUTTRIP_FAILED, payload: err}))   
}

// ========== POST DATA FROM CHECK-IN FORM TO DB SCHEMA 'TRIPS' ==========
export const postInTrip = (inTrip, history) => (dispatch) => {
    console.log(inTrip)
    
    dispatch({type: POST_INTRIP_PENDING})
    axios.post('/api/trip/in', inTrip)
        .then(res => dispatch({type: POST_INTRIP_SUCCESS, payload: res.data}))
        // CURRENTLY HAVE AN ISSUE WHERE POST ROUTE SENT THEN GOING BACK TO HOME EG '/' HAPPENS TOO QUICKLY, DB HAS NOT UPDATED  TO SHOW THAT VEHICLE IS OUT
        .then(setTimeout(function(){ history.push('/') }, 1000))
        .catch(err => dispatch({type: POST_INTRIP_FAILED, payload: err}))   
}

