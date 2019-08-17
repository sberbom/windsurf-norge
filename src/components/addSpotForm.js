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
            authour: ""
        }
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
                        />
                </InputGroup>
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
                        />
                </InputGroup>
                <Form.Group controlId="approach">
                    <Form.Label className="input-label">Annkomst</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label className="input-label">Beskrivelse</Form.Label>
                    <Form.Control as="textarea" rows="6" />
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
                <Button variant="primary" type="submit">
                    Lagre
                </Button>
            </Form>
        );
    }
}

export default AddSpotForm;