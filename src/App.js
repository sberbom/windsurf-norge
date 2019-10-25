import React from 'react';
import './App.css';
import SBNavbar from './containers/navbar';
import Home from './views/home'
import Footer from './components/footer';
import ViewSpots from './views/viewSpots';
import MapView from './views/mapView';
import AddSpot from './containers/addSpot';
import SpotView from './views/spotView'
import { connect } from 'react-redux';

function mapStateToProps(state) {
  const props = {}
  props.route = state.changeRoute.currentRoute;
  props.activeSpot = state.activeSpot.activeSpot;
  return props;
}

class App extends React.Component {

  render(){
    const route = this.props.route;
    return (
      <div className="App">
        <SBNavbar route={this.route}/>
        {route === "home" && <Home/>}
        {route === 'mapView' && <MapView/>}
        {route === "viewSpots" && <ViewSpots/>}
        {route === 'addSpot' && <AddSpot/>}
        {route === 'spot' && <SpotView/>}
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
