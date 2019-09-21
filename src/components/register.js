import React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';

class Register extends React.Component {

    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
    }

    onRegister = () => {
        console.log(this.username.current.value, this.password.current.value)
        fetch('http://localhost:3300/register', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username: this.username.current.value,
                password: this.password.current.value,
                email: this.email.current.value
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log("ok");
        })
    }

    render(){
        return(
            <div>
                <Modal show={true} onHide={this.props.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">E-post</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="E-post"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            ref={this.email}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Brukernavn</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Brukernavn"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            ref={this.username}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">Passord</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="Passord"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            type="password"
                            ref={this.password}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Lukk
                    </Button>
                    <Button variant="primary" onClick={this.onRegister}>
                        Register
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Register;