import {
    REQUEST_SPOTS_SUCCESS, 
    REQUEST_SPOTS_FAILED, 
    REQUEST_SPOTS_PENDING,
    GET_ADDRESS, 
    GET_LNG,
    GET_LAT,
    CHANGE_ROUTE,
    CHANGE_ACTIVE_SPOT,
} from './constants';

const initialStateSpots = {
    isPending: false,
    spots: [],
    error: "",
}

export const requestSpots= (state=initialStateSpots, action={}) => {
    switch(action.type){
        case REQUEST_SPOTS_PENDING:
            return Object.assign({}, state, { isPending: true});
        case REQUEST_SPOTS_SUCCESS:
            return Object.assign({}, state, {spots:action.payload, isPending:false});
        case REQUEST_SPOTS_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
}

const intialActiveSpot = {
    activeSpot: null
}

export const activeSpot = (state = intialActiveSpot, action={}) => {
    switch(action.type){
        case CHANGE_ACTIVE_SPOT:
            return Object.assign({}, state, {activeSpot: action.paylode});
        default:
            return state;
    }
}

const intialAddress = {
    address: "--Undefied--",
    lat: "",
    lng: "",
}

export const getAddress = (state= intialAddress, action={}) => {
    switch(action.type) {
        case GET_ADDRESS:
            return Object.assign({}, state, {address: action.payload})
        case GET_LAT:
            return Object.assign({}, state, {lat: action.payload})
        case GET_LNG:
            return Object.assign({}, state, {lng: action.payload})
        default:
            return state
    }
}

const initialState = {
    currentRoute: 'home'
}

export const changeRoute = (state=initialState, action={}) => {
    switch(action.type){
        case CHANGE_ROUTE:
            window.scrollTo(0,0)
            return Object.assign({}, state, {currentRoute: action.paylode})
        default: 
            return state
    }
}