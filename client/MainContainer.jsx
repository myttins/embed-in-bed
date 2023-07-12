import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import ImageCard from './ImageCard';

import './stylesheets/styles.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedOnce: false,
      images: [],
      code: '',
    };

    this.generate = this.generate.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
  }

  handleImgClick(url) {
    const body = {
      url: url,
    };

    fetch('/api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          ...this.state,
          code: data
        });
      })
      .catch((err) => console.log('handleImgClick function error:', err));
  }

  generate(e) {
    e.preventDefault();
    const prompt = { prompt: document.getElementById('promptField').value };
    
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    })
      .then((res) => {
        // console.log(res)
        return res.json()})
      .then((data) => {
        // console.log(data);
        this.setState({
          ...this.state,
          loadedOnce: true,
          images: data,
        });
      })
      .catch((err) => console.log('generate function error:', err));
  }

  render() {
    if (this.state.loadedOnce === false) {
      return (
        <div id="promptDiv">
          <form onSubmit={this.generate}>
            <input
              type="text"
              placeholder="A descriptive prompt "
              id="promptField"
            ></input>
            <input type="submit" value="generate" id="generateButton"></input>
          </form>
        </div>
      );
    } else {
      const imgArr = [];
      this.state.images.forEach((el) => {
        // console.log(el);
        imgArr.push(<ImageCard url={el} key={el} handleImgClick={this.handleImgClick} />);
      });

      return (
        <div id="containerDiv">
          <div id="promptDiv">
            <form onSubmit={this.generate}>
              <input
                type="text"
                placeholder="A descriptive prompt "
                id="promptField"
              ></input>
              <input type="submit" value="generate" id="generateButton"></input>
            </form>
          </div>
          <div id="imageDiv">{imgArr}</div>
          <div>
            <pre>
              <code className="language-css">
                {this.state.code}
              </code>
            </pre>
          </div>
        </div>
      );
    }
  }
}

export default MainContainer;
