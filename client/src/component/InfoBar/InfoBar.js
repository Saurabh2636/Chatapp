import React from 'react'


import './InfoBar.css';

const InfoBar = ({room}) => {
    return(
    <div className="InfoBar">
        <div className ="leftInnerContainer">
            <h3>{room}</h3>
        </div>
        <div className = "rightInnerContainer">
            <a href = "/"><img  alt = "close image"/></a>
        </div>
    </div>
)}
export default InfoBar
