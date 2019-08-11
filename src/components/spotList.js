import React from 'react' 
import Card from './card'
import '../styles/spotList.css'

const SpotList = (props) => {
    let cards = [];
    for( let i = 0; i<props.number; i++){
        cards.push(<Card key={i}/>);
    }
    return(
        <div className="spotList">
            {cards}
        </div>
    );
}

export default SpotList;