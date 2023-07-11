import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

// import component1 from './components/component1';

import './stylesheets/styles.css';

class App extends Component {
  generate(e) {
    e.preventDefault();
    // send a post request to server
    // get text from input
    const prompt = document.getElementById('prompt').value;
    console.log('In generate()- prompt:', prompt);

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(prompt),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">Embed, In Bed</h1>
        <form onSubmit={this.generate}>
          <input
            type="text"
            placeholder="A descriptive prompt "
            id="prompt"
          ></input>
          <input type="submit" value="generate"></input>
        </form>
      </div>
    );
  }
}

export default App;
