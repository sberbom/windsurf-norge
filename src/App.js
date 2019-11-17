import React from 'react';
import './App.css';
import SBNavbar from './containers/navbar';
import Footer from './components/footer';
import Home from './containers/home'
import ViewSpots from './containers/viewSpots';
import MapView from './views/mapView';
import AddSpot from './containers/addSpot';
import SpotView from './views/spotView'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import EditSpot from './containers/editSpot';

function mapStateToProps(state) {
  const props = {}
  props.activeSpot = state.activeSpot.activeSpot;
  return props;
}

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <SBNavbar/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mapView">
            <MapView />
          </Route>
          <Route path="/viewSpots">
            <ViewSpots />
          </Route>
          <Route path="/addSpot">
            <AddSpot />
          </Route>
          <Route path="/spot">
            <SpotView />
          </Route>
          <Route path="/editSpot">
            <EditSpot/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);
