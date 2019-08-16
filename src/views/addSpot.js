import React from 'react'
import Title from '../components/title';
import Map from '../containers/map';
import AddSpotForm from '../components/addSpotForm';

class AddSpot extends React.Component {

    render(){
        return(
            <div className="content">
                <div className="mainContent">
                    <Title title="Legg til spot"/>
                    <Map/>
                    <AddSpotForm/>
                </div>
            </div>
        );
    }
}

export default AddSpot;