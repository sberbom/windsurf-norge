import React from 'react';
import Header from '../components/header';
import SpotList from '../components/spotList'
import Map from '../components/map';
import Title from '../components/title';

const Home = () => {
    return(
        <div className="content">
            <Header/>
            <div className="mainContent">
                <Title title={"Kart"}/>
                <Map/>
                <Title title={"Populære spots"}/>
                <SpotList number={6}/>
            </div>
        </div>
    );
}

export default Home;