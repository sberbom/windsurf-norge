import React from 'react' 
import SpotCard from '../containers/card'
import '../styles/spotList.css'

class SpotList extends React.Component {

    componentDidMount() {
        if(this.props.getHeight){
            this.props.getHeight(this.getHeight);
        }
        if(this.props.spots.length === 0){
            this.props.onRequestSpots();
        }
     }

    getHeight = () => {
        const height = this.divElement.clientHeight;
        return height;
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

    getSortetSpots = (spots, type) => {
        switch(type){
            case "mostPopular":
                return spots.sort((a,b) => (a.views<b.views) ? 1 : -1);
            case "mostRecent":
                return spots.sort((a,b) => (new Date(a.date)>new Date(b.date)) ? 1 : -1);
            case "alfabetic":
                return spots.sort((a, b) => (a.name>b.name) ? 1 : -1);
            default:
                return spots.sort((a, b) => (a.name>b.name) ? 1 : -1);
        }
    }

    render() {
        let filteredSpots = this.getFilteredSpots();
        filteredSpots = this.getSortetSpots(filteredSpots, this.props.sortBy);

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
}

export default SpotList;