import React from 'react';
import './styles.css';
import ReactDOM from 'react-dom';
import AppHome from './Home';
import Navbar from '../components/navbar';
import VaccinePage from './VaccinePage';
import SymptomsPage from './SymptomsPage';
import CasePage from './CasePage';
import PolicyPage from './PolicyPage';
import title from '../images/title.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="App">
        <div className="Header" style={{ width: '80%' }}>
          <img src={title} alt="title" width="80%" />
        </div>
        <Navbar />

        <div>
          <Switch>
            <Route path="/Home" component={AppHome} />
            <Route path="/VaccinePage" component={VaccinePage} />
            <Route path="/SymptomsPage" component={SymptomsPage} />
            <Route path="/CasePage" component={CasePage} />
            <Route path="/PolicyPage" component={PolicyPage} />
          </Switch>
        </div>
      </div>
    </Router>
  </React.StrictMode>,
  rootElement
);
