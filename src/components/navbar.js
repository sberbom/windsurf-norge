import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const SBNavbar = (props) =>  {
    return(
        <Navbar bg="light" expand="lg" className="fixed-top">
            <Navbar.Brand className="pointer" onClick={() => props.route("home")}>Windsurf Norge</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.route("viewSpots")}>Alle spots</Nav.Link>
                    <Nav.Link onClick={() => props.route("mapView")}>Kart</Nav.Link>
                    <Nav.Link onClick={() => props.route("addSpots")}>Legg til spot</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default SBNavbar;