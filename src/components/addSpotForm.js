import React from 'react';
import {Form, Button} from 'react-bootstrap';
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
            titleInvalid: false
        }
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
            fetch('http://localhost:3300/add_spot', {
                method: 'post',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify({
                    name: this.state.spotName,
                    description: this.state.description,
                    facebookPage: this.state.facebookPage,
                    apporach: this.state.apporach,
                    latlng: {lat: this.props.lat, lng: this.props.lng},
                    date: new Date(),
                    user: this.props.user,
                    token: this.props.token
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
        for(var i=0; i<this.props.spots.length; i++) {
            if(this.props.spots[i].name.toLowerCase() === name.toLowerCase()){
                this.setState({titleInvalid: true});
                return;
            }
        }
        this.setState({spotName: name, titleInvalid: false});
        
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

    onAdressClick = () => {
        alert("Dra markøren på kartet for å velge spotens posisjon")
    }

    render() {
        return(
            <Form className="addSpotForm">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Spot navn</Form.Label>
                    <Form.Control type="text" placeholder="Drøbak" onChange={this.titleChange} isInvalid={this.state.titleInvalid} />
                    <Form.Control.Feedback type="invalid">
                        Spotten eksisterer
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control readOnly value={this.props.address} onClick={this.onAdressClick}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput3">
                    <Form.Label>Facebook-side</Form.Label>
                    <Form.Control type="text" placeholder="https://www.facebook.com/groups/352680848154785/" onChange={this.facebookChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput4">
                    <Form.Label>Annkomst</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.approachChange}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput5">
                    <Form.Label>Beskrivelse</Form.Label>
                    <Form.Control as="textarea" rows="4" onChange={this.descriptionChange}/>
                </Form.Group>
                {this.props.user &&
                    <Form.Group controlId="exampleForm.ControlInput6">
                        <Form.Label>Bruker</Form.Label>
                        <Form.Control readOnly defaultValue={this.props.user.name} />
                    </Form.Group>
                }
                <Button variant="primary" onClick={this.onSubmit}> {/*add type="submit"*/}
                    Lagre
                </Button>
            </Form>
        );
    }
}

export default AddSpotForm;