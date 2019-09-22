import React from 'react';
import { Carousel, Card, Jumbotron, Button } from 'react-bootstrap';
import Map from '../containers/map';
import "../styles/spot.css";
import Geocode from "react-geocode";
import {googleAPI} from '../env';
import '../styles/spot.css'

class Spot extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            address: "null"
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

    render() {
        const bgimage = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
        const {spot} = this.props;  
        return(
            <div className="content spot">
                <Jumbotron className={"spotJumbotron"} style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                    <h1>{spot.name}</h1>
                </Jumbotron>
                <div className="mainContent spotContent">
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
                                <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1518810370118-0fde40f8b0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
                                alt="First slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className={"spotCardContainer"}>
                        <Card className={"spotCard"}>
                            <Card.Header>{spot.name}</Card.Header>
                            <Card.Body>
                                <p><b>Adresse: </b>{this.state.address}</p>
                                <p><b>Annkomst: </b>{spot.approach}</p>
                                <p><b>Beskrivelse: </b>{spot.description}</p>
                                <p><b>Facebook-side: </b>{spot.facebookPage}</p>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Button variant="primary">Endre spot</Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }

}

export default Spot;