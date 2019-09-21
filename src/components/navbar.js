import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogIn from '../containers/logIn';
import Register from './register';

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
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
    
        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    onLoginClick = () => {
        this.setState({showLogin: !this.state.showLogin})
    }

    onRegisterClick = () => {
        this.setState({showRegister: !this.state.showRegister})
    }
    

    render() {
        return(
            <div>
                {this.state.visible && <Navbar bg="light" expand="lg" className="fixed-top">
                    <Navbar.Brand className="pointer" onClick={() => this.props.setRoute("home")}>Windsurf Norge</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => this.props.setRoute("viewSpots")}>Alle spots</Nav.Link>
                            <Nav.Link onClick={() => this.props.setRoute("mapView")}>Kart</Nav.Link>
                            <Nav.Link onClick={() => this.props.setRoute("addSpot")}>Legg til spot</Nav.Link>
                        </Nav>
                        {this.props.user === null ? 
                        <Nav>
                            <Nav.Link onClick={() => this.onLoginClick()}>Logg inn</Nav.Link>
                            <Nav.Link onClick={() => this.onRegisterClick()}>Registrer</Nav.Link>
                        </Nav>
                        :
                        <Nav>
                            <Nav.Link>{this.props.user.username}</Nav.Link>
                            <Nav.Link onClick={() => this.props.changeUser(null)}>Logg ut</Nav.Link>
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

export default SBNavbar;