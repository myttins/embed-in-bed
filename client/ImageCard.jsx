import React, { Component, useEffect } from 'react';

const ImageCard = (props) => {
  const { handleImgClick } = props;

  return (
    <img
      src={props.url}
      width="200"
      height="200"
      className='imgCard'
      onClick={() => handleImgClick(props.url)}
    ></img>
  );
};

export default ImageCard;
