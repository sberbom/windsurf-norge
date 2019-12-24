import {
    REQUEST_SPOTS_SUCCESS, 
    REQUEST_SPOTS_FAILED, 
    REQUEST_SPOTS_PENDING,
    GET_ADDRESS, 
    GET_LNG,
    GET_LAT,
    CHANGE_ACTIVE_SPOT,
    CHANGE_USER,
    UPDATE_SPOT_LOCAL,
    SET_TOKEN
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
        case UPDATE_SPOT_LOCAL:
            const spots = state.spots.map((item, index) => {
                if(item.name === action.payload.name){
                    return{
                        ...item,
                        description: action.payload.description,
                        appraoch: action.payload.appraoch,
                        facebookpage : action.payload.facebookpage
                    }
                }
                return item
            })
            console.log(spots)
            return Object.assign({}, state, {spots: spots});
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
    address: "--Ukjent--",
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

const intialUser = {
    user: null
}

export const changeUser = (state = intialUser, action={}) => {
    switch(action.type){
        case CHANGE_USER:
            return Object.assign({}, state, {user: action.payload})
        default:
            return state;
    }
}

const initalToken = {
    token: null
}

export const setToken = (state = initalToken, action = {}) => {
    switch(action.type) {
        case SET_TOKEN:
            return Object.assign({}, state, {token: action.payload})
        default:
            return state;
    }
}