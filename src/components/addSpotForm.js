import React from 'react';
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import '../styles/addSpotForm.css'

class AddSpotForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            spotName: "",
            address: "",
            facebookPage: "",
            apporach: "",
            description: "",
            authour: "",
            validateName: true
        }
    }

    onSubmit = () => {
        if(this.props.address==="") {
            alert("Flytt markøren for å velge hvor spotten er");
        }
        else if (this.state.spotName==="") {
            alert("Skriv inn ett navn for spotten");
        }
        else {
            fetch('http://localhost:3300/add_spot', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    name: this.state.spotName,
                    description: this.state.description,
                    facebookPage: this.state.facebookPage,
                    apporach: this.state.apporach,
                    latlng: {lat: this.props.lat, lng: this.props.lng}
                })
            })
            .then(response => response.json())
            .then(res => {
                if(res){
                    console.log(res);
                }
            })
            this.props.onRequestSpots();
        }
    }

    titleChange = (e) => {
        const name = e.target.value
        this.setState({spotName: name, validateName: true});
        for(var i=0; i<this.props.spots.length; i++) {
            if(this.props.spots[i].name.toLowerCase() === name.toLowerCase()){
                this.setState({validateName: false});
                break;
            }
        }
    }

    facebookChange = (e) => {
        this.setState({facebookPage: e.target.value});
    }

    approachChange = (e) => {
        this.setState({apporach: e.target.value});
    }

    descriptionChange = (e) => {
        this.setState({description: e.target.value});
    }

    render() {
        return(
            <Form className="addSpotForm">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="spotName">Spot navn</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Spot navn"
                        aria-label="Spot navn"
                        aria-describedby="basic-addon1"
                        onChange={this.titleChange}
                    />
                </InputGroup>
                {!this.state.validateName && <Form.Text className="">Denne spotten finnes allerede</Form.Text>}
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="address">Adresse</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        value={this.props.address}
                        readOnly={true}
                        aria-label="Adresse"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="facebook-page">Facebook-side</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Facebook-side"
                        aria-label="Facebook-side"
                        aria-describedby="basic-addon1"
                        onChange={this.facebookChange}
                    />
                </InputGroup>
                <Form.Group controlId="approach">
                    <Form.Label className="input-label">Annkomst</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.approachChange}/>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label className="input-label">Beskrivelse</Form.Label>
                    <Form.Control as="textarea" rows="6" onChange={this.descriptionChange}/>
                </Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="author">Navn / Kallenavn</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Ditt navn / kallenavn"
                        aria-label="Dittnavn"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button variant="primary" onClick={this.onSubmit}> {/*add type="submit"*/}
                    Lagre
                </Button>
            </Form>
        );
    }
}

export default AddSpotForm;