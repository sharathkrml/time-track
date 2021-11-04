import React from 'react'
import profileimg from '../assets/images/image-jeremy.png';

function ProfileCard() {
    return (
        <div className="profile-container">
            <img src={profileimg} alt="profile"></img>
            <p>Report for</p>
            <h1>Jeremy Robson/</h1>
            <ul>
                <li>Daily</li>
                <li>Weekly</li>
                <li>Monthly</li>
            </ul>
        </div>
    )
}

export default ProfileCard
