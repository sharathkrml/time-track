import React from "react";
import profileimg from "../assets/images/image-jeremy.png";
import "./ProfileCard.css";
function ProfileCard(props) {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <img className="profile-img" src={profileimg} alt="profile"></img>
        <div className="profile-content">
          <p className="report-text">Report for</p>
          <p className="profile-name">Jeremy Robson</p>
        </div>
      </div>
      <ul className="profile-options">
        <li
          onClick={() => props.setActive("daily")}
          className={props.active === "daily" ? "active" : "inactive"}
        >
          Daily
        </li>
        <li
          onClick={() => props.setActive("weekly")}
          className={props.active === "weekly" ? "active" : "inactive"}
        >
          Weekly
        </li>
        <li onClick={() => props.setActive("monthly")}
          className={props.active === "monthly" ? 'active' : 'inactive'}
          
          >Monthly</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
