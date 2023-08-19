import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const MainContainer = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  return (
    <div className=''>
      HOME PAGE
    </div>
  );
};

export default MainContainer;

// class MainContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loadedOnce: false,
//       clickedImg: false,
//       images: [],
//       code: '',
//       animated: false,
//     };

//     this.prompt = '';

//     this.generate = this.generate.bind(this);
//     this.handleImgClick = this.handleImgClick.bind(this);
//     this.handleCopy = this.handleCopy.bind(this);
//   }

//   handleImgClick(url) {
//     const body = {
//       url: url,
//       prompt: this.prompt,
//     };
//     fetch('/api/download', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     })
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         this.setState({
//           ...this.state,
//           clickedImg: true,
//           code: data,
//         });
//       })
//       .catch((err) => console.log('handleImgClick function error:', err));
//   }

//   handleCopy() {
//     const value = this.state.code;
//     navigator.clipboard.writeText(value);
//     console.log(value);
//     document.querySelector('#codeButton').innerHTML = 'Copied';

//     return;
//   }

//   generate(e) {
//     e.preventDefault();
//     const prompt = document.getElementById('promptField').value;
//     this.prompt = prompt;

//     const body = { prompt: prompt };

//     this.setState({
//       ...this.state,
//       promot: prompt,
//       generate: true,
//     });

//     fetch('/api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(body),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           ...this.state,
//           loadedOnce: true,
//           images: data,
//           generate: false,
//         });
//       })
//       .catch((err) => console.log('generate function error:', err));
//   }

//   render() {
//     const imgArr = [];
//     this.state.images.forEach((el) => {
//       imgArr.push(
//         <ImageCard url={el} key={el} handleImgClick={this.handleImgClick} />
//       );
//     });

//     const loadedOnce = this.state.loadedOnce;

//     return (
//       <div className="container">
//         <h1 className="title">{'< Embed, In Bed /> '}</h1>

//         <div id="containerDiv">
//           <div id="promptDiv">
//             <input
//               type="text"
//               placeholder="A descriptive prompt"
//               id="promptField"
//             ></input>
//             <button className={this.state.generate ? "generate-button generate_loading" : "generate-button"} type='button' onClick={this.generate}>
//               <span className='generate_text'>Generate</span>
//             </button>
//           </div>
//           {(() => {
//             if (this.state.loadedOnce === true) {
//               return (
//                 <>
//                   <div id="imageDiv">{imgArr}</div>
//                   <div className="box">
//                     {(() => {
//                       if (this.state.clickedImg === true) {
//                         return (
//                           <>
//                             <pre>
//                               <code className="language-html">
//                                 {this.state.code}
//                               </code>
//                               <button
//                                 id="codeButton"
//                                 onClick={this.handleCopy}
//                                 type="button"
//                               >
//                                 Copy
//                               </button>
//                             </pre>
//                             <Link to="/history">
//                               <button id="historyButton">History</button>
//                             </Link>
//                           </>
//                         );
//                       }
//                     })()}
//                   </div>
//                 </>
//               );
//             }
//           })()}
//         </div>
//       </div>
//     );
//   }
// }
