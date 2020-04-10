import React from 'react';
import LandingPage from './LandingPage';
import {Route} from 'react-router-dom';
import '../css/App.css';
//test

function App() {
  return (
    <div>
      <Route path='/' exact component={LandingPage}/>
    </div>
  );
}

export default App;
