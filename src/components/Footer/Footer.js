import React from "react";
import './Footer.css'

import greenOps from './images/greenOps.png'

function Footer() {
  return (
      <>
        <div id="footer-container">
            <div id="info">
                <img id="footerTitle" src={greenOps} width="251" height="150" alt="Green Ops Logo"/>
            </div>
            <div id="footerNav">
                <a className="footerLink" href="#">Home</a>
                <a className="footerLink" href="#">About</a>
                <a className="footerLink" href="#">Contact</a>
                <a className="footerLink" href="#">Legal</a>
            </div>

        </div>
      </>
  );
}

export default Footer;

// <span className="smallfont" >© 2021</span>
// <span className="smallfont" >Privacy - Terms</span>
