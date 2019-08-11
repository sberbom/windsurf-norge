import React from 'react';
import Title from '../components/title';
import SpotList from '../components/spotList'
import Searchbar from '../components/searchbar'

const ViewSpots = () => {
    return(
        <div className="content">
            <div className="mainContent">
                <Title title={"Spots"}/>
                <Searchbar/>
                <SpotList number={20} />
            </div>
        </div>
    );
}

export default ViewSpots;