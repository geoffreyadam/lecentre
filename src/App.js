import React from 'react';
import './App.css';
import HomePage from './components/frontOffice/HomePage'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Base3en1 from './components/frontOffice/Base3en1';
import InfosPratiques from './components/frontOffice/InfosPratiques';
import Billetterie from './components/frontOffice/Billetterie';
import DecouvrirLeCentre from './components/frontOffice/DecouvrirLeCentre';
import Programmation from './components/frontOffice/Programmation';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/programmation">
              <Programmation />
            </Route>
            <Route path="/decouvrir_le_centre">
              <DecouvrirLeCentre />
            </Route>
            <Route path="/base_3_en_1">
              <Base3en1 />
            </Route>
            <Route path="/infos_pratiques">
              <InfosPratiques />
            </Route>
            <Route path="/billetterie">
              <Billetterie />
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
