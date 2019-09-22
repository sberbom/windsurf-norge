import React from 'react';
import { compose, withProps, withHandlers } from "recompose"
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import Card from '../containers/card'
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";
import {googleAPI} from '../env.js'; 

const GoogleMaps = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleAPI}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `80vh` }} className={"mapContainer"} />,
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
        defaultZoom={props.zoom}
        defaultCenter={props.center}
        onClick={() => props.onMarkerClick(null)}
    >
        {props.oneSpot ? 
            <Marker position={{lat: Number(props.spot.latlng.lat), lng: Number(props.spot.latlng.lng)}}/>
        :
        props.addSpot ? 
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
                    <Marker key={index} position={{lat: Number(spot.latlng.lat), lng: Number(spot.latlng.lng)}} onClick={() => {props.onMarkerClick(spot.name)}}>
                        {props.isOpen === spot.name && 
                            <InfoWindow onCloseClick={() => {props.onCloseClick(null)}}> 
                                <Card
                                    spot={spot}
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