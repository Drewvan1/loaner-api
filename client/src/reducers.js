
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_RESERVATIONS_PENDING,
    REQUEST_RESERVATIONS_SUCCESS,
    REQUEST_RESERVATIONS_FAILED,
    REQUEST_LOANERS_PENDING,
    REQUEST_LOANERS_SUCCESS,
    REQUEST_LOANERS_FAILED,
    REQUEST_USER_PENDING,
    REQUEST_USER_SUCCESS,
    REQUEST_USER_FAILED
} from './constants'
//import { object } from 'prop-types'

// ============= SEARCH FIELD REDUCER ================
const initialStateSearch = {
    searchField: '',
}

export const searchVehicles = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            // return { ...state, searchfield: action.payload}
            return Object.assign({}, state, {searchField: action.payload})
    
        default:
            return state
    }
}

// ============= RESERVATIONS REDUCER ================
const initialStateReservations = {
    reservations: [],
    resIsPending: false,
    resError: ''
}

export const requestReservations = (state = initialStateReservations, action = {}) => {
    switch (action.type) {
        case REQUEST_RESERVATIONS_PENDING:
            return Object.assign({}, state, {resIsPending: true})
        case REQUEST_RESERVATIONS_SUCCESS:
            return Object.assign({}, state, {reservations: action.payload, resIsPending: false})
        case REQUEST_RESERVATIONS_FAILED:
            return Object.assign({}, state, {resError: action.payload, resIsPending: false})
        default:
            return state;
    }
}

// ============= LOANERS REDUCER ================
const initialStateLoaners = {
    loaners: [],
    loanersIsPending: false,
    loanersError: ''
}

export const requestLoaners = (state = initialStateLoaners, action = {}) => {
    switch (action.type) {
        case REQUEST_LOANERS_PENDING:
            return Object.assign({}, state, {loanersIsPending: true})
        case REQUEST_LOANERS_SUCCESS:
            return Object.assign({}, state, {loaners: action.payload, loanersIsPending: false})
        case REQUEST_LOANERS_FAILED:
            return Object.assign({}, state, {loanersError: action.payload, loanersIsPending: false})
        default:
            return state;
    }
}

// ============= user REDUCER ================
const initialStateUser = {
    user: {},
    userIsPending: false,
    userError: ''
}

export const requestUser = (state=initialStateUser, action = {}) => {
    switch (action.type) {
        case REQUEST_USER_PENDING:
            return Object.assign({}, state, {userIsPending: true})
        case REQUEST_USER_SUCCESS:
            return Object.assign({}, state, {user: action.payload, userIsPending: false})
        case REQUEST_USER_FAILED:
            return Object.assign({}, state, {userError: action.payload, userIsPending: false})
        default:
            return state
    }
}
