import React from 'react' 
import SpotCard from '../components/card'
import '../styles/spotList.css'

class SpotList extends React.Component {
    
    render() {
        let filteredSpots = this.getFilteredSpots();
        filteredSpots = this.getSortetSpots(filteredSpots);

        const {number} = this.props;

        let numberOfCards = 0
        number > filteredSpots.length ? numberOfCards = filteredSpots.length : numberOfCards = number;

        let cards = [];
        for( let i = 0; i<numberOfCards; i++){
            cards.push(<SpotCard key={i} spot={filteredSpots[i]}/>);
        }

        return(
            <div className="spotList">
                {cards}
            </div>
        );
    }

    getFilteredSpots = () => {
        const {searchFilter, spots} = this.props
        if(searchFilter !== null && searchFilter !== undefined) {
            const filteredSpots = spots.filter(spot => { 
                console.log("spot", spot.name);
                return spot.name.toLowerCase().includes(searchFilter.toLowerCase());
            })
            return filteredSpots;
        }
        else { 
            return spots
        }
    }

    getSortetSpots = (spots) => {
        return spots.sort((a, b) => (a.name>b.name) ? 1 : -1);
    }
}

export default SpotList;