import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import ImageCard from './ImageCard';

import './stylesheets/styles.css';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedOnce: false,
      clickedImg: false,
      images: [],
      code: '',
    };

    this.prompt = '';

    this.generate = this.generate.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
  }

  handleImgClick(url) {
    const body = {
      url: url,
      prompt: this.prompt,
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
          clickedImg: true,
          code: data,
        });
      })
      .catch((err) => console.log('handleImgClick function error:', err));
  }

  handleCopy() {
    const value = this.state.code;
    navigator.clipboard.writeText(value);
    console.log(value);
    return;
  }

  generate(e) {
    e.preventDefault();
    const prompt = document.getElementById('promptField').value;
    this.prompt = prompt;

    const body = { prompt: prompt };

    this.setState({
      ...this.state,
      promot: prompt,
    });

    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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
    const imgArr = [];
    this.state.images.forEach((el) => {
      imgArr.push(
        <ImageCard url={el} key={el} handleImgClick={this.handleImgClick} />
      );
    });

    const loadedOnce = this.state.loadedOnce;

    return (
      <div className="container">
        <h1 className="title">{'< Embed, In Bed /> '}</h1>

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
          {(() => {
            if (this.state.loadedOnce === true) {
              return (
                <>
                  <div id="imageDiv">{imgArr}</div>
                  <div className="box">
                    {(() => {
                      if (this.state.clickedImg === true) {
                        return (
                          <>
                            <pre>
                              <code className="language-html">
                                {this.state.code}
                              </code>
                              <button
                                className="codeButton"
                                onClick={this.handleCopy}
                              >
                                Copy
                              </button>
                            </pre>
                            <Link to="/history">
                              <button id="historyButton">History</button>
                            </Link>
                          </>
                        );
                      }
                    })()}
                  </div>
                </>
              );
            }
          })()}
        </div>
      </div>
    );
  }
}

export default MainContainer;
