import React from 'react';
import SpotList from '../containers/spotList';
import Searchbar from '../components/searchbar';
import Jumbo from '../components/jumbo';

class ViewSpots extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            searchFilter: null,
            sortBy: "mostPopular"
        };
    }

    onSearchfilterChange = (filter) => {
        filter.target.value === "" ? this.setState({searchFilter: null}) : this.setState({searchFilter: filter.target.value});
    }

    onSortByChange = (value) => {
        this.setState({sortBy: value});
    }

    render() {
        return(
            <div className="content">
                <div className="mainContent">
                    {/* <Title title={"Spots"}/> */}
                    <Jumbo 
                        title={"Spot"} 
                        undertitle={"På denne siden ser du alle spotene i vår database. Ser du ikke din favorit spot? Legg den til!"}
                        button={true}
                        buttontext={"Legg til spot"}
                        onButtonClick={() => this.props.setRoute("addSpot")}
                        background={"https://images.unsplash.com/photo-1515532718572-84a0ef89c998?ixlib=rb-1.2.1&auto=format&fit=crop&w=2695&q=80"}
                    />
                    <Searchbar onSearchfilterChange={this.onSearchfilterChange} onSortByChange={this.onSortByChange}/>
                    <SpotList number={20} searchFilter={this.state.searchFilter} sortBy={this.state.sortBy} />
                </div>
            </div>
        );
    }
}

export default ViewSpots;