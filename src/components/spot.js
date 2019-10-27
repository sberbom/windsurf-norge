import React from 'react';
import { Button } from 'react-bootstrap';
import Map from '../containers/map';
import "../styles/spot.css";
import Geocode from "react-geocode";
import {googleAPI} from '../env';
import '../styles/spot.css'
import Jumbo from './jumbo';
import Fileupload from '../containers/fileupload'
import LogIn from '../containers/logIn';
import Photogallery from './photogallery';


class Spot extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            address: "null",
            addPhoto: false,
            login: false,
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

    addPhotoButtonClick = () => {
        if(this.props.user === null){
            this.setState({login: true})
        }
        else{
            this.setState({addPhoto: true})
        }
    }

    render() {
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
                        <Map
                            oneSpot={true}
                            spot={this.props.spot}
                            center={{ lat: Number(spot.latlng.lat), lng: Number(spot.latlng.lng) }}
                            zoom={12} />
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
                        <Button onClick={this.addPhotoButtonClick}>
                            Legg til bilder
                        </Button>
                    </div>
                </div>
                {this.props.spot.photos && 
                    <div className="gallery">
                        <Photogallery photos={spot.photos} />
                    </div>
                }
                {this.state.addPhoto && <Fileupload handleClose={this.handleClose}/>}
                {this.state.login && <LogIn handleClose={() => this.setState({login:false})}/>}
            </div>
        );
    }

}

export default Spot;