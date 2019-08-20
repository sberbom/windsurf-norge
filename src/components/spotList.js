import React from 'react' 
import Card from './card'
import '../styles/spotList.css'

const SpotList = (props) => {

    let filteredSpots = null
    
    if(props.searchFilter !== null || props.searchFilter !== undefined){
        filteredSpots = props.spots.filter(spot => { 
            return spot.name.toLowerCase().includes(props.searchFilter.toLowerCase());
        })
    }
    else { filteredSpots = props.spots }
    

    let numberOfCards = 0
    props.number > filteredSpots.length ? numberOfCards = filteredSpots.length : numberOfCards = props.number;
    
    let cards = [];
    for( let i = 0; i<numberOfCards; i++){
        cards.push(<Card key={i} spotName={filteredSpots[i].name} description={filteredSpots[i].description}/>);
    }
    
    return(
        <div className="spotList">
            {cards}
        </div>
    );
}

export default SpotList;