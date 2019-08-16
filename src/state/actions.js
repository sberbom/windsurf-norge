import {
    REQUEST_SPOTS_SUCCESS, 
    REQUEST_SPOTS_FAILED, 
    REQUEST_SPOTS_PENDING,
} from './constants';

export const requestSpots = () => (dispatch) => {
    dispatch({type:REQUEST_SPOTS_PENDING})
    fetch('http://localhost:3300/spots')
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_SPOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_SPOTS_FAILED, payload: error}));
}