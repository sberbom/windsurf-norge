import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class SBNavbar extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
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
    

    render() {
        return(
            this.state.visible && <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand className="pointer" onClick={() => this.props.setRoute("home")}>Windsurf Norge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={() => this.props.setRoute("viewSpots")}>Alle spots</Nav.Link>
                        <Nav.Link onClick={() => this.props.setRoute("mapView")}>Kart</Nav.Link>
                        <Nav.Link onClick={() => this.props.setRoute("addSpot")}>Legg til spot</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => this.props.setRoute("loggin")}>Logg inn</Nav.Link>
                        <Nav.Link onClick={() => this.props.setRoute("register ")}>Registrer</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SBNavbar;