import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_RESERVATIONS_PENDING, REQUEST_RESERVATIONS_SUCCESS, REQUEST_RESERVATIONS_FAILED,
    REQUEST_LOANERS_PENDING, REQUEST_LOANERS_SUCCESS, REQUEST_LOANERS_FAILED,
    REQUEST_USER_PENDING, REQUEST_USER_SUCCESS, REQUEST_USER_FAILED,
    POST_RESERVATION_PENDING, POST_RESERVATION_SUCCESS, POST_RESERVATION_FAILED
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
 export const fetchReservations = () => (dispatch) => {
    dispatch({ type: REQUEST_RESERVATIONS_PENDING })
    axios.get('/api/reservations')
        .then(res => dispatch({ type: REQUEST_RESERVATIONS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: REQUEST_RESERVATIONS_FAILED, payload: err }))
}

export const fetchLoaners = () => (dispatch) => {
    dispatch({type: REQUEST_LOANERS_PENDING})
    axios.get('/api/loaners')
        .then(res => dispatch({type: REQUEST_LOANERS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: REQUEST_LOANERS_FAILED, payload: err}))
}

export const fetchUser = () => (dispatch) => {
    dispatch({type: REQUEST_USER_PENDING})
    axios.get('/api/current_user')
        .then(res => dispatch({type: REQUEST_USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: REQUEST_USER_FAILED, payload: err}))
}

export const postReservation = (reservation, history) => (dispatch) => {
    const { fullName, reqModel, apptTime } = reservation
    
    dispatch({type: POST_RESERVATION_PENDING})
    console.log({fullName, reqModel, apptTime})
    axios.post('/api/reservations/new', {fullName, reqModel, apptTime})
        .then(res => dispatch({type: POST_RESERVATION_SUCCESS, payload: res.data}))
        .then(history.push('/'))
        .catch(err => dispatch({type: POST_RESERVATION_FAILED, payload: err}))

    
}

