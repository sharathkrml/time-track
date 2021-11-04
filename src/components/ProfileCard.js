import React from "react";
import profileimg from "../assets/images/image-jeremy.png";
import "./ProfileCard.css";
function ProfileCard() {
  return (
    <div className="profile-container">
      <div className="profile-details">
        <img className="profile-img" src={profileimg} alt="profile"></img>
        <p className="report-text">Report for</p>
        <p className="profile-name">Jeremy Robson</p>
      </div>
      <ul className="profile-options">
        <li>Daily</li>
        <li>Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
}

export default ProfileCard;
