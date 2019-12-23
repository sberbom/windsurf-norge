import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogIn from '../containers/logIn';
import Register from '../containers/register';
import { Link, withRouter } from 'react-router-dom'

class SBNavbar extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true,
            showLogin: false,
            showRegister: false
        };
    }

    redirect = (url) => {
        this.props.history.push(url);
    }

    onLoginClick = () => {
        this.setState({showLogin: !this.state.showLogin})
    }

    onRegisterClick = () => {
        this.setState({showRegister: !this.state.showRegister})
    }

    logOut = () => {
        this.props.changeUser(null)
        this.props.setToken(null)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    render() {
        return(
            <div>
                {this.state.visible && <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top topnav">
                    <Navbar.Brand className="pointer" onClick={() => this.redirect("/home")}>
                        <img
                            src="https://image.flaticon.com/icons/svg/80/80839.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        Windsurf Norge
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/viewSpots">Alle spots</Link>
                            <Link to="/mapView">Kart</Link>
                            <Link to="/addSpot">Legg til spot</Link>
                        </Nav>
                        {this.props.user === null ? 
                        <Nav>
                            <Nav.Link onClick={() => this.onLoginClick()}>Logg inn</Nav.Link>
                            <Nav.Link onClick={() => this.onRegisterClick()}>Registrer</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link>{this.props.user.username}</Nav.Link>
                            <Nav.Link onClick={this.logOut}>Logg ut</Nav.Link>
                        </Nav>
                    }
                    </Navbar.Collapse>
                </Navbar>}
                {this.state.showLogin && <LogIn handleClose={() => this.onLoginClick()}/>}
                {this.state.showRegister && <Register handleClose={() => this.onRegisterClick()}/>}
            </div>
        );
    }
}

export default withRouter(SBNavbar);