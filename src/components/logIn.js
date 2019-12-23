import React from 'react';
import {Modal, Button } from 'react-bootstrap';
import Register from '../containers/register'
import { withRouter } from 'react-router-dom'
import GoogleLogin from 'react-google-login';


class LogIn extends React.Component {

    constructor(props){
        super(props);
        this.username = React.createRef();
        this.password = React.createRef();
        this.state = {
            error: false,
            errorMessage: null,
            showRegister: false,
        }
    }

    responseGoogle = (response) => {
        if (!response.error){
            localStorage.setItem('token', response.tokenId)
            console.log(JSON.stringify(response.profileObj))
            localStorage.setItem('user', JSON.stringify(response.profileObj))
            this.props.changeUser(response.profileObj);
            this.props.setToken(response.tokenId);
            this.props.handleClose();
        }
      }

    render(){
        return(
            <div>
                <Modal show={true} onHide={this.props.handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Logg inn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <GoogleLogin
                            clientId="273104178954-04iu0j1nc7tn9f896nojlsrnre3bpedi.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Lukk
                    </Button>
                    </Modal.Footer>
                </Modal>
                {this.state.showRegister && <Register handleClose={() => this.setState({showRegister: false})}/>}
            </div>
        );
    }
}

export default withRouter(LogIn);