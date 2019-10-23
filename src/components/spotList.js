import React from 'react' 
import SpotCard from '../containers/card'
import '../styles/spotList.css'

class SpotList extends React.Component {

    componentDidMount() {
        if(this.props.getHeight){
            this.props.getHeight(this.getHeight);
        }
     }

    getHeight = () => {
        const height = this.divElement.clientHeight;
        return height;
    }

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
            <div className="spotList"
            ref={ (divElement) => this.divElement = divElement}>
                {cards}
            </div>
        );
    }

    getFilteredSpots = () => {
        const {searchFilter, spots} = this.props
        if(searchFilter !== null && searchFilter !== undefined) {
            const filteredSpots = spots.filter(spot => { 
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