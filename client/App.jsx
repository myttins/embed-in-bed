import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainContainer from './MainContainer';
import History from './History';

import './stylesheets/styles.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainContainer/>
        </Route>
        <Route path="/history">
          <History/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
