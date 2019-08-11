import React from 'react';
import { compose, withProps } from "recompose"
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Card from './card'

const GoogleMaps = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6L6V97NXcF0Nr_RrYOaIntWEnZywcUrA&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `80vh` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 61.2383973, lng: 11.2987633 }}
    >
      <Marker position={{ lat: 59.887542, lng: 10.633064 }} onClick={props.onMarkerClick}>
          {props.isOpen && 
            <InfoWindow onCloseClick={props.onCloseClick}> 
                <Card/>
            </InfoWindow>
        }
      </Marker>
    </GoogleMap>
  );

export default GoogleMaps;