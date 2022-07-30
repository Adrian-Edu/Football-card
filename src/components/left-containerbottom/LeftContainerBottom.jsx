import "./LeftContainerBottom.css";
import React, { useState } from "react";

function Vote(props) {
  const handleClick = () => {
    props.onChangeVote(props.id);
  };

  return (
    <div className="bottom-container">
      <div className="logo">
        <img src={props.url} alt="" />
      </div>
      <div className="mid-writing">
        <h4>{props.nume}</h4>
        <div>
          <h4>Votes : {props.votes}</h4>
        </div>
      </div>

      <div>
        <button onClick={handleClick} className="vote">
          Vote
        </button>
      </div>
    </div>
  );
}

export default Vote;
