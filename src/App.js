import React from 'react';
import './App.css';
import SBNavbar from './components/navbar';
import Home from './views/home'
import Footer from './components/footer';
import ViewSpots from './views/viewSpots';
import MapView from './views/mapView';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      route: "home"
    }
  }

  route =  (string) => {
    this.setState({route: string});
  }

  render(){
    return (
      <div className="App">
        <SBNavbar route={this.route}/>
        {this.state.route === "home" && <Home/>}
        {this.state.route === "viewSpots" && <ViewSpots/>}
        {this.state.route === 'mapView' && <MapView/>}
        <Footer/>
      </div>
    );
  }
}

export default App;
