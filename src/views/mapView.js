import React from 'react';
import Title from '../components/title';
import Map from '../containers/map';


const MapView = (props) => {
    return(
        <div className="content">
            <div className="mainContent">
                <Title title={"Kart"}/>
                <Map/>
            </div>
        </div>
    );
}

export default MapView;