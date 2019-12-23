import React from 'react';
import './App.css';
import SBNavbar from './containers/navbar';
import Footer from './components/footer';
import Home from './views/home'
import ViewSpots from './containers/viewSpots';
import MapView from './views/mapView';
import AddSpot from './containers/addSpot';
import SpotView from './views/spotView'
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom'
import EditSpot from './containers/editSpot';
import {changeUser, setToken} from './state/actions';

function mapStateToProps(state) {
  const props = {}
  props.activeSpot = state.activeSpot.activeSpot;
  return props;
}

function mapDispatchToProps(dispatch){
  return {
      changeUser: (user) => dispatch(changeUser(user)),
      setToken: (token) => dispatch(setToken(token))
  }
}

class App extends React.Component {

  componentDidMount() {
    if( localStorage.getItem('user') && localStorage.getItem('token')){
      this.props.changeUser(JSON.parse(localStorage.getItem('user')));
      this.props.setToken(localStorage.getItem('token'))
    }
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
