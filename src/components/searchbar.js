import React from 'react';
import {InputGroup, Dropdown, FormControl } from 'react-bootstrap';
import '../styles/searchbar.css'

const Searchbar = (props) => {
    return(
        <div className={'searchbar'}> 
            <div className='searchfield'>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Søk</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Søk"
                    aria-label="Søk"
                    aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sorter etter
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Alfabetisk</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mest populær</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Nyests</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default Searchbar;