import React, { useState, useEffect } from "react";
import "./Card.css";
import ellipsis from "../assets/images/icon-ellipsis.svg";
function Card(props) {
  const [ellipsisHover, setEllipsisHover] = useState();
  useEffect(() => {
    console.log(ellipsisHover);
  }, [ellipsisHover]);
  return (
    <div className={ellipsisHover ? "ellipsisHover" : "card-container"}>
      <div onHov className="title-container">
        <h3 className="card-title">{props.title}</h3>
        <img
          onMouseEnter={() => setEllipsisHover(true)}
          onMouseLeave={() => setEllipsisHover(false)}
          className="ellipsis"
          src={ellipsis}
          alt="ellipsis"
        />
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
