import React from 'react';
import Header from '../components/header';
import SpotList from '../containers/spotList'
import Map from '../containers/map';
import Title from '../components/title';

const Home = () => {
    return(
        <div className="content">
            <Header/>
            <div className="mainContent">
                <Title title={"Populære spots"}/>
                <SpotList number={6}/>
                <Title title={"Kart"}/>
                <Map/>
            </div>
        </div>
    );
}

export default Home;