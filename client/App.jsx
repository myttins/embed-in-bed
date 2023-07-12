import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import MainContainer from './MainContainer';

import './stylesheets/styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 id="title">{"< Embed, In Bed /> "}</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;
