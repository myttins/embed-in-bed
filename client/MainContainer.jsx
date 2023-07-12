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
          code: data,
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
      .then((res) => res.json())
      .then((data) => {
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
          <input
            type="text"
            placeholder="A descriptive prompt"
            id="promptField"
          ></input>
          <button id="generateButton" onClick={this.generate}>
            Generate
          </button>
        </div>
      );
    } else {
      const imgArr = [];
      this.state.images.forEach((el) => {
        imgArr.push(
          <ImageCard url={el} key={el} handleImgClick={this.handleImgClick} />
        );
      });

      return (
        <div id="containerDiv">
          <div id="promptDiv">
            <input
              type="text"
              placeholder="A descriptive prompt"
              id="promptField"
            ></input>
            <button id="generateButton" onClick={this.generate}>
              Generate
            </button>
          </div>
          <div id="imageDiv">{imgArr}</div>
          <div className='box'>
            <pre contentEditable='true'>
              <code className="language-html">{this.state.code}</code>
            </pre>
          </div>
        </div>
      );
    }
  }
}

export default MainContainer;
