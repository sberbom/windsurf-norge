import React from 'react';
import { compose, withProps, withHandlers } from "recompose"
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Card from './card'
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import {googleAPI} from '../env.js'; 

const GoogleMaps = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleAPI}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `80vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            // action on cluster click
        },
      }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 61.2383973, lng: 11.2987633 }}
        onClick={() => props.onMarkerClick(null)}
    >
        {props.addSpot ? 
            <Marker 
                position={{lat: 61.2383973, lng: 11.2987633}} 
                draggable={true} 
                ref={props.onMarkerMounted}
                onDragEnd={props.onDragEnd}/>
        :
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={100}
        >
            {props.spots.map((spot, index) => {
                return(
                    <Marker key={index} position={{lat: Number(spot.latlng.lat), lng: Number(spot.latlng.lng)}} onClick={() => props.onMarkerClick(index)}>
                        {props.isOpen === index && 
                            <InfoWindow onCloseClick={props.onCloseClick}> 
                                <Card
                                    spotName={spot.name}
                                    description={spot.description}
                                />
                            </InfoWindow>
                        }
                    </Marker>
                    );
                })
            }
        </MarkerClusterer>
        }
    </GoogleMap>
  );

export default GoogleMaps;