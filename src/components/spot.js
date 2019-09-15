import React from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
import Map from '../containers/map';
import "../styles/spot.css";
import Geocode from "react-geocode";
import {googleAPI} from '../env';


class Spot extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            address: "",
        }
    }

    componentDidMount() {
        this.setState({address: this.getAddress(this.props.spot.latlng.lat, this.props.spot.latlng.lng)});
    }

    getAddress = (lat, lng) => {
        Geocode.setApiKey(googleAPI);
        Geocode.enableDebug();
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                return address[0];
            },
            error => {
              console.error(error);
            }
          );
    }

    render() {
        return(
            <div className={"spot"}>
               <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            {this.props.spot.name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Carousel className={"spotCarousel"}>
                        <Carousel.Item className={"spotCarouselItem"}>
                            <img
                            className="d-block w-100"
                            src="https://images.unsplash.com/photo-1518810370118-0fde40f8b0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Map/>
                        </Carousel.Item>
                    </Carousel>
                        <p>{this.state.address}</p>
                        <p><b>Annkomst: </b> {this.props.spot.approach}</p>
                        <p><b>Beskrivelse: </b>{this.props.spot.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }

}

export default Spot;