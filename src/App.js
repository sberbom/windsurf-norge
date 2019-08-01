import React from 'react';
import './App.css';
import SBNavbar from './components/navbar';
import Header from './components/header';
import SpotList from './components/spotList'

function App() {
  return (
    <div className="App">
      <SBNavbar/>
      <div className="content">
        <Header/>
        <SpotList/>
      </div>
    </div>
  );
}

export default App;
