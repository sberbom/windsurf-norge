import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../styles/jumbo.css'

const Jumbo = (props) => {
    const background = props.background;
    return(
        <Jumbotron fluid style={{backgroundImage: `url(${background})`}}>
            <div className="jumbo-content">
                {props.title &&
                    <h1>{props.title}</h1>
                }
                <p>{props.undertitle}</p>
                {props.button && 
                <p>
                    <Button variant="primary">{props.buttontext}</Button>
                </p>
                }
            </div>
        </Jumbotron>
    )
}

export default Jumbo;