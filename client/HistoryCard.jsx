import React from 'react';

const HistoryCard = (props) => {
  // loop thru elements on array and add them to div
  const handleDelete = () => {


  };

  let dbDiv = [];
  for (let i = 0; i < props.urls.length; i++) {
    dbDiv.push(
      <div id="historyCard">
        <img src={props.urls[i]} width="50"></img>
        <p className="historyText" id="historyUrl">
          {props.urls[i]}
        </p>
        <button id="deleteButton">Delete</button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="historyText">{props.prompt}</h1>
      {dbDiv}
    </div>
  );
};

export default HistoryCard;
