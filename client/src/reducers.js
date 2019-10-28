
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_RESERVATIONS_PENDING,
    REQUEST_RESERVATIONS_SUCCESS,
    REQUEST_RESERVATIONS_FAILED    
} from './constants'

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

const initialStateReservations = {
    reservations: [],
    isPending: false,
    resError: ''
}

export const requestReservations = (state = initialStateReservations, action = {}) => {
    switch (action.type) {
        case REQUEST_RESERVATIONS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_RESERVATIONS_SUCCESS:
            return Object.assign({}, state, {reservations: action.payload, isPending: false})
        case REQUEST_RESERVATIONS_FAILED:
            return Object.assign({}, state, {resError: action.payload, isPending: false})
        default:
            return state;
    }
}