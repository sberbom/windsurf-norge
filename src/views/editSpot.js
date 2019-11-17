import React from 'react'
import Jumbo from '../components/jumbo';
import Map from '../containers/map';
import EditSpotForm from '../containers/editSpotForm';
import LogIn from '../containers/logIn'
import { withRouter } from 'react-router-dom'
import '../styles/addSpot.css'

class EditSpot extends React.Component {

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

    onLoginClose = () => {
        this.props.history.push("/home");
    }

    render(){
        const {spot} = this.props;
        console.log(spot)
        return(
            <div className="content">
                <Jumbo 
                        title={"Endre spot"} 
                        undertitle={"På denne siden kan du endre spotter"}
                        background={"https://images.unsplash.com/photo-1509300644470-42e9b2634383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}
                    />
                {/* <div className="bar" /> */}
                <div className="addspotContent">
                    <div className="addspotMapContainer">
                        <Map
                            oneSpot={true}
                            spot={spot}
                            center={{ lat: Number(spot.latlng.lat), lng: Number(spot.latlng.lng) }}
                            zoom={12} />
                    </div>
                    <EditSpotForm spot={spot} position={this.state.position}/>
                </div>
                {this.props.user === null && <LogIn handleClose={() => this.onLoginClose()}/>}
            </div>
        );
    }
}

export default withRouter(EditSpot);