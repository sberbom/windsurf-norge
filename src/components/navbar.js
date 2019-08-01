import React from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class SBNavbar extends React.Component {

    render(){
        return(
            <Navbar bg="light" expand="lg" className="fixed-top">
                <Navbar.Brand href="#home">Windsurf Norge</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">View Spots</Nav.Link>
                        <Nav.Link href="#link">Add Spots</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SBNavbar;