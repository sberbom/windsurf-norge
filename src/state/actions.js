import {
    REQUEST_SPOTS_SUCCESS, 
    REQUEST_SPOTS_FAILED, 
    REQUEST_SPOTS_PENDING,
    GET_ADDRESS, 
    GET_LNG,
    GET_LAT,
} from './constants';
import Geocode from "react-geocode";
import {googleAPI} from '../env';

export const requestSpots = () => (dispatch) => {
    dispatch({type:REQUEST_SPOTS_PENDING})
    fetch('http://localhost:3300/spots')
        .then(res => res.json())
        .then(data => dispatch({type: REQUEST_SPOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_SPOTS_FAILED, payload: error}));
}

export const getAddress = (lat, lng) => (dispatch) => {
    Geocode.setApiKey(googleAPI);
    Geocode.enableDebug();
    Geocode.fromLatLng(lat, lng).then(
        response => {
            const address = response.results[0].formatted_address;
            dispatch({type: GET_ADDRESS, payload: address})
            dispatch({type: GET_LAT, payload: lat})
            dispatch({type: GET_LNG, payload: lng})
        },
        error => {
          console.error(error);
        }
      );
}