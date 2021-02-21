import React from 'react'
import './Header.css'



const Header = () => {
    return (
        <header>
            <div id="logo">
                <img src="/earth.png" alt="logo" id="logoImg"/>
                <span id="title">Title</span>
            </div>
            <ul id="nav">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <a id="goToMapA" href="/map">
                <div id="goToMap">
                    <span>Got to Interactive Map</span>
                </div>
            </a>
        </header>
        
    )
}

export default Header