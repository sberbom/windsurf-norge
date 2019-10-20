import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/header.css';

class Header extends React.Component {

    render() {
        return(
            <div className='header'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1518810370118-0fde40f8b0f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>Windsurf Norge</h3>
                        <p>På denne siden kan du finne informasjon om steder å windsurfe i Norge</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1518810662256-76e93da5e72e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2709&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Kart</h3>
                        <p>Under kart-fanen kan du se etter steder å windsurfe i nærheten av deg</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1530717449302-271006cdc1bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Legg til spots</h3>
                        <p>Vil du bidra til siden kan du legge til spots som andre kan finne</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}

export default Header;