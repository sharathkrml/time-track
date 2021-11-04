import React from 'react'
import ellipsis from '../assets/images/icon-ellipsis.svg'
function Card() {
    return (
        <div>
            <div>
                <h3>Work</h3>
                <img src={ellipsis} alt="ellipsis"/>
            </div>
            <h1>32hrs</h1>
            <p>Last Week - 36hrs</p>
        </div>
    )
}

export default Card
