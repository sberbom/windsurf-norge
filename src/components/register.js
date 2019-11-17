import React from 'react';
import {Modal, Button, InputGroup, FormControl} from 'react-bootstrap';
import { withRouter } from 'react-router-dom'


class Register extends React.Component {

    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.email = React.createRef();
        this.state = {
            error: false,
            errorMessage: null
        }
    }

    onRegister = () => {
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
            if(user.username === undefined){
                this.setState({error: true, errorMessage: user})
            }
            else {
                this.props.changeUser(user);
                this.props.handleClose();
            }
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
                        {this.state.error && <p>{this.state.errorMessage}</p>}
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">E-post</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                            placeholder="E-post"
                            aria-label="E-post"
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
                            aria-label="Brukernavn"
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
                            aria-label="Passord"
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

export default withRouter(Register);