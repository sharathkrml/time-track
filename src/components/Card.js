import React from 'react'
import ellipsis from '../assets/images/icon-ellipsis.svg'
function Card(props) {
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <img src={ellipsis} alt="ellipsis"/>
            </div>
            <h1>{props.current}hrs</h1>
            <p>Last {props.timeframes} - {props.previous}hrs</p>
        </div>
    )
}

export default Card
