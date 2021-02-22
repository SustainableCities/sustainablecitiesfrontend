import React from 'react'
import './Header.css'

import greenOps from './images/greenOps.png'



const Header = () => {
    return (
        <header>
            <div id="logo">
                <img src={greenOps} alt="Green Ops Logo" width="250" height="120" id="logoImg"/>
            </div>
            <ul id="nav">
                <li>
                    <a href="/home">HOME</a>
                </li>
                <li>
                    <a href="/About">ABOUT</a>
                </li>
                <li>
                    <a href="/contact">CONTACT</a>
                </li>
            </ul>
            <a id="goToMapA" href="/map">
                <div id="goToMap">
                    <span>Go To Interactive Map</span>
                </div>
            </a>
        </header>

    )
}

export default Header
