import React from 'react';
import './App.css';
import HomePage from './components/frontOffice/HomePage'
import BackOfficeIndex from './components/backOffice/BackOfficeIndex'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import DecouvrirCentre from './components/frontOffice/DecouvrirCentre';
import InfosPratiques from './components/frontOffice/InfosPratiques';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/decouvrirLeCentre">
              <DecouvrirCentre />
            </Route>
            <Route path="/infosPratiques">
              <InfosPratiques />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
