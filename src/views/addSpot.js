import React from 'react'
import Jumbo from '../components/jumbo';
import Map from '../containers/map';
import AddSpotForm from '../containers/addSpotForm';
import LogIn from '../containers/logIn'
import { withRouter } from 'react-router-dom'
import '../styles/addSpot.css'

class AddSpot extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            draggableMarker: null,
            position: null
        }
    }
    
    componentDidMount() {
        window.scrollTo(0,0);
    }

    onLoginClick = () => {
        this.props.history.push("/home");
    }

    render(){
        return(
            <div className="content">
                <Jumbo 
                        title={"Legg til spot"} 
                        undertitle={"På denne siden kan du legge til en spot. Dra markøren på kartet for å velge spottens plassering"}
                        background={"https://images.unsplash.com/photo-1509300644470-42e9b2634383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}
                    />
                {/* <div className="bar" /> */}
                <div className="addspotContent">
                    <div className="addspotMapContainer">
                        <Map addSpot={true} onMarkerMounted={this.onAddDraggableMarker} onDragEnd={this.onPositionChanged}/>
                    </div>
                    <AddSpotForm position={this.state.position}/>
                </div>
                {this.props.user === null && <LogIn handleClose={() => this.onLoginClick()}/>}
            </div>
        );
    }
}

export default withRouter(AddSpot);