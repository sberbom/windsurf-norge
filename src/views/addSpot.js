import React from 'react'
import Title from '../components/title';
import Map from '../containers/map';
import AddSpotForm from '../containers/addSpotForm';

class AddSpot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            draggableMarker: null,
            position: null
        }
    }

    render(){
        return(
            <div className="content">
                <div className="mainContent">
                    <Title title="Legg til spot"/>
                    <Map addSpot={true} onMarkerMounted={this.onAddDraggableMarker} onDragEnd={this.onPositionChanged}/>
                    <AddSpotForm position={this.state.position}/>
                </div>
            </div>
        );
    }
}

export default AddSpot;