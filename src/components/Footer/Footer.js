import React from "react";
import './Footer.css'

function Footer() {
  return (
      <>
        <div id="footer-container">
            <div id="info">
                <span id="footerTitle">GreenOps</span>
                <span className="smallfont" >© 2021</span>
                <span className="smallfont" >Privacy - Terms</span>
            </div>
            <div id="footerNav">
                <a className="footerLink" href="#">Product</a>
                <a className="footerLink" href="#">Features</a>
                <a className="footerLink" href="#">Resources</a>
                <a className="footerLink" href="#">Company</a>
            </div>

        </div>
      </>
  );
}

export default Footer;

  