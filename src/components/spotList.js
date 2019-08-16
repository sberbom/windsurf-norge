import React from 'react' 
import Card from './card'
import '../styles/spotList.css'

const SpotList = (props) => {
    let numberOfCards = 0
    props.number > props.spots.length ? numberOfCards = props.spots.length : numberOfCards = props.number;
    
    let cards = [];
    for( let i = 0; i<numberOfCards; i++){
        cards.push(<Card key={i} spotName={props.spots[i].name} description={props.spots[i].description}/>);
    }
    
    return(
        <div className="spotList">
            {cards}
        </div>
    );
}

export default SpotList;