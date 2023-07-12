import React, { Component, useEffect } from 'react';

const ImageCard = (props) => {
  const { handleImgClick } = props;

  //   const handleImgClick = (e) => {
  //     const body = {
  //       url: props.url,
  //     };

  //     fetch('/api/download', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(body),
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((err) => console.log('handleImgClick function error:', err));
  //   };

  return (
    <img
      src={props.url}
      width="200"
      height="200"
      onClick={() => handleImgClick(props.url)}
    ></img>
  );
};

export default ImageCard;
