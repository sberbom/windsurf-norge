import React from 'react';
import './App.css';
import SBNavbar from './components/navbar';
import Home from './views/home'
import Footer from './components/footer';
import ViewSpots from './views/viewSpots';
import MapView from './views/mapView';
import AddSpot from './views/addSpot';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      route: "mapView"
    }
  }

  route =  (string) => {
    this.setState({route: string});
    window.scrollTo(0, 0);
  }

  render(){
    return (
      <div className="App">
        <SBNavbar route={this.route}/>
        {this.state.route === "home" && <Home/>}
        {this.state.route === "viewSpots" && <ViewSpots/>}
        {this.state.route === 'mapView' && <MapView/>}
        {this.state.route === 'addSpot' && <AddSpot/>}
        <Footer/>
      </div>
    );
  }
}

export default App;
