import React from 'react';
import {Form, Button} from 'react-bootstrap';
import Geocode from "react-geocode";
import {googleAPI} from '../env';
import { withRouter } from 'react-router-dom'
import '../styles/addSpotForm.css'

class EditSpotForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spotName: this.props.spot.name,
            address: null,
            facebookPage: this.props.spot.facebookPage,
            approach: this.props.spot.approach,
            description: this.props.spot.description,
            authour: this.props.spot.user,
            titleInvalid: false,
            loading: true
        }
        this.getAddress(this.props.spot.latlng.lat, this.props.spot.latlng.lng)
    }

    getAddress = (lat, lng) => {
        Geocode.setApiKey(googleAPI);
        Geocode.enableDebug();
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({loading: false, address: address})
            },
            error => {
            console.error(error);
            }
        );
    }

    onSubmit = () => {
        if(this.props.address==="") {
            alert("Flytt markøren for å velge hvor spotten er");
        }
        else if (this.state.spotName==="") {
            alert("Skriv inn ett navn for spotten");
        }
        else if (this.state.titleInvalid){
            alert("Spotten eksisterer allerde")
        }
        else {
            fetch('http://localhost:3300/spot/update', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    query: { "name": this.props.spot.name },
                    update: {
                        "$set": {
                            description: this.state.description,
                            facebookPage: this.state.facebookPage,
                            approach: this.state.approach,
                        }
                    }
                })
            })
            .then(response => response.json())
            .then(res => {
                if(res){
                    console.log(res);
                }
            })
        }
        // this.props.editSpot({name: this.state.spotName, description: this.state.description, approach: this.state.address, facebookPage: this.state.facebookPage})
        this.props.history.push("/home");
    }

    facebookChange = (e) => {
        this.setState({facebookPage: e.target.value});
    }

    approachChange = (e) => {
        this.setState({approach: e.target.value});
    }

    descriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    render() {
        return(
            this.state.loading ? <p>loading</p> :
            <Form className="addSpotForm">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Spot navn</Form.Label>
                    <Form.Control readOnly value={this.props.spot.name} type="text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control readOnly value={this.state.address} type="text"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Facebook-side</Form.Label>
                    <Form.Control type="text" value={this.state.facebookPage} onChange={this.facebookChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Annkomst</Form.Label>
                    <Form.Control as="textarea" rows="3" value={this.state.approach} onChange={this.approachChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput5">
                    <Form.Label>Beskrivelse</Form.Label>
                    <Form.Control as="textarea" rows="4" value={this.state.description} onChange={this.descriptionChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput6">
                    <Form.Label>Bruker</Form.Label>
                    <Form.Control readOnly defaultValue={this.props.spot.user} />
                </Form.Group>
                <Button variant="primary" onClick={this.onSubmit}> {/*add type="submit"*/}
                    Lagre
                </Button>
            </Form>
        );
    }
}

export default withRouter(EditSpotForm);