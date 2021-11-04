import React from "react";
import "./Card.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";
function Card(props) {
  return (
    <div className="card-container">
      <div className="title-container">
        <h3>{props.title}</h3>
        <img className="ellipsis" src={ellipsis} alt="ellipsis" />
      </div>
      <div className="card-details">
        <p className="current-time">{props.current}hrs</p>
        <p className="previous-time">
          Last {props.timeframes} - {props.previous}hrs
        </p>
      </div>
    </div>
  );
}

export default Card;
