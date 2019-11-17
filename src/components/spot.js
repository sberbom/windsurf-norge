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
import Comments from '../containers/comments';
import { withRouter } from 'react-router-dom'



class Spot extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            address: "null",
            addPhoto: false,
            login: false,
            spot: null,
            loading: true,
        }
    }

    componentDidMount() {
        var spotName = this.getString(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
        fetch('http://localhost:3300/oneSpot', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": spotName
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res) {
                    this.setState({spot: res, loading: false});
                    this.getAddress(res.latlng.lat, res.latlng.lng);
                    this.updateDB(res)
                    this.props.setActiveSpot(res);
                }
            })
        window.scrollTo(0,0);
    }

    updateDB = (spot) => {
        fetch('http://localhost:3300/spot/update', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: { "name": spot.name },
                update: {
                    "$set": {
                        "views": spot.views+1
                    }
                },
                options: { "upsert": false }
            })
        })
            .then(response => response.json())
            .then(res => {
                if (res) {
                    console.log(res);
                }
            })
    }

    getString(s){
        return s.replace("%20", " ").replace("%C3%A5", "å").replace("%C3%85", "Å").replace("%C3%86", "Æ").replace("%C3%98", "Ø")
        .replace("%C3%A6", "æ").replace("%C3%B8", "ø");
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

    editSpotClick = () => {
        this.props.history.push("/editSpot");
    }

    render() {
        if(this.state.loading === true){
            return(<p>Loading</p>)
        }

        const spot = this.state.spot
        const bgimage = spot.picture ? spot.picture : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
        
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
                            spot={spot}
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
                            <p className={"infoField"}><a  href={spot.facebookPage} target="_blank" rel="noopener noreferrer">{spot.facebookPage}</a></p>
                        </div>
                        <Button className={"spotButton"} onClick={this.addPhotoButtonClick}>
                            Legg til bilder
                        </Button>
                        <Button className={"spotButton"} onClick={this.editSpotClick}>
                            Endre Spot
                        </Button>
                    </div>
                </div>
                {spot.photos && 
                    <div className="gallery">
                        <Photogallery photos={spot.photos} />
                    </div>
                }
                <Comments comments={spot.comments} />
                {this.state.addPhoto && <Fileupload handleClose={this.handleClose}/>}
                {this.state.login && <LogIn handleClose={() => this.setState({login: false})}/>}
            </div>
        );
    }

}

export default withRouter(Spot);