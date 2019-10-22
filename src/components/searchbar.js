import React from 'react';
import {InputGroup, Dropdown, FormControl,Navbar } from 'react-bootstrap';
import '../styles/searchbar.css'

const Searchbar = (props) => {
    return(
        <Navbar className="bg-light justify-content-between searchbar">
            <InputGroup className="search">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Søk</InputGroup.Text>
                </InputGroup.Prepend>
                    <FormControl
                onChange={props.onSearchfilterChange}
                placeholder="Søk"
                aria-label="Søk"
                aria-describedby="basic-addon1"
                />
            </InputGroup>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sorter etter
                </Dropdown.Toggle>

                <Dropdown.Menu onChange={props.onSortByChange}>
                    <Dropdown.Item onClick={() => props.onSortByChange("alfabetic")} href="#/">Alfabetisk</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.onSortByChange("mostPopular")} href="#/">Mest populær</Dropdown.Item>
                    <Dropdown.Item onClick={() => props.onSortByChange("mostRecent")} href="#/">Nyests</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    );
}

export default Searchbar;