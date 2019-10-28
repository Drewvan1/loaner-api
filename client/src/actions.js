
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_RESERVATIONS_PENDING,
    REQUEST_RESERVATIONS_SUCCESS,
    REQUEST_RESERVATIONS_FAILED    
} from './constants'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


//const apiServer = 'http://localhost:5000/reservations'
const apiServer = '/reservations'

// need to use a higher order function here (eg function returning a function) because a typical action return is an object but
//  redux-thunk is looking for a function.  when it sees that it knows the code may be asynchronous and therefore will listen for the promise response
 export const fetchReservations = () => (dispatch) => {
    dispatch({ type: REQUEST_RESERVATIONS_PENDING })
    fetch(apiServer)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data => {
            console.log(data)
            dispatch({ type: REQUEST_RESERVATIONS_SUCCESS, payload: data })
        })
        .catch(err => dispatch({ type: REQUEST_RESERVATIONS_FAILED, payload: err }))
}