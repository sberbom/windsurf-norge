import {
    REQUEST_SPOTS_SUCCESS, 
    REQUEST_SPOTS_FAILED, 
    REQUEST_SPOTS_PENDING,
} from './constants';

const initialStateSpots = {
    isPending: false,
    spots: [],
    error: ""
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