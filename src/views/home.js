import React from 'react';
import Header from '../components/header';
import SpotList from '../containers/spotList'
import Map from '../containers/map';
import Title from '../components/title';
import Searchbar from '../components/searchbar';

const Home = () => {
    return(
        <div className="content">
            <Header/>
            <Searchbar/>
            <div className="mainContent">
                <Title title={"Populære spots"}/>
                <SpotList number={8}/>
                <Title title={"Kart"}/>
                <Map/>
            </div>
        </div>
    );
}

export default Home;