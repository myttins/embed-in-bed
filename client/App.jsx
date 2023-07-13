import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainContainer from './MainContainer';

import './stylesheets/styles.css';

const App = () => {
  return (
    <Router>
      <Route path='/' component={MainContainer} />
    </Router>
  );
};

export default App;
