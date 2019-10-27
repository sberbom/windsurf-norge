import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import Map from '../containers/map';
import "../styles/spot.css";
import Geocode from "react-geocode";
import {googleAPI} from '../env';
import '../styles/spot.css'
import Jumbo from './jumbo';
import Fileupload from '../containers/fileupload'

class Spot extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            address: "null",
            addPhoto: false,
        }
    }

    componentDidMount() {
        this.getAddress(this.props.spot.latlng.lat, this.props.spot.latlng.lng);
    }

    getAddress = (lat, lng) => {
        Geocode.setApiKey(googleAPI);
        // Geocode.enableDebug();
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({address: address})
            },
            error => {
              console.error(error, "err");
            }
          );
    }
    
    handleClose = () => {
        this.setState({addPhoto: false})
    }

    render() {
        console.log(this.props.spot)
        const bgimage = this.props.spot.picture ? this.props.spot.picture : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
        const {spot} = this.props;  
        return(
            <div className="content spot">
                <Jumbo 
                        title={spot.name} 
                        background={bgimage}
                    />
                <div className="spotContent">
                    <div className={"spotCarouselContainer"}>
                        <Carousel className={"spotCarousel"}>
                            <Carousel.Item>
                                <Map 
                                    oneSpot={true} 
                                    spot={this.props.spot} 
                                    center={{lat: Number(spot.latlng.lat), lng: Number(spot.latlng.lng)}}
                                    zoom={12}/>
                            </Carousel.Item>
                            <Carousel.Item className={"spotCarouselItem"}>
                                <Jumbo
                                    background={"https://images.unsplash.com/photo-1518810370118-0fde40f8b0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={"spotCardContainer"}>
                        <h2>{spot.name}</h2>
                        <div>
                            <p className={"infoLabel"}>Adresse: </p>
                            <p className={"infoField"}>{this.state.address}</p>
                        </div>
                        <div>
                            <p className={"infoLabel"}>Annkomst: </p>
                            <p className={"infoField"}>{spot.approach}</p>
                        </div>
                        <div>
                            <p className={"infoLabel"}>Beskrivelse: </p>
                            <p className={"infoField"}>{spot.description}</p>
                        </div>
                        <div>
                            <p className={"infoLabel"}>Facebook-side: </p>
                            <p className={"infoField"}>{spot.facebookPage}</p>
                        </div>
                        <Button onClick={() => this.setState({addPhoto: true})}>
                            Legg til bilder
                        </Button>
                    </div>
                </div>
                {this.state.addPhoto && <Fileupload handleClose={this.handleClose}/>}
            </div>
        );
    }

}

export default Spot;