import React from 'react';
import Title from '../components/title';
import SpotList from '../containers/spotList';
import Searchbar from '../components/searchbar';

class ViewSpots extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            searchFilter: null
        };
    }

    onSearchfilterChange = (filter) => {
        filter.target.value === "" ? this.setState({searchFilter: null}) : this.setState({searchFilter: filter.target.value});
    }

    render() {
        return(
            <div className="content">
                <div className="mainContent">
                    <Title title={"Spots"}/>
                    <Searchbar onSearchfilterChange={this.onSearchfilterChange}/>
                    <SpotList number={20} searchFilter={this.state.searchFilter} />
                </div>
            </div>
        );
    }
}

export default ViewSpots;