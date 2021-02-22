import React from "react";

import './Block2.css'
import buildingsIcon from './images/buildingsIcon.png'
import improveHealth from './images/improveHealth.png'
import moneyIcon from './images/moneyIcon.png'

function Block2() {
  return (
      <div className="block2-background">
          <div className="block2-container">
            <div className="block2-heading">
              <h2>Why retrofit?</h2>
              <p>Below are only a few of the many advantages to making buildings greener.</p>
            </div>
            <div className="block2-imagesBox">
              <div className="imageBox1">
                <img src={buildingsIcon} width="250" height="200" alt="Boston Skyline" className="energyImage" />
                <h4>REDUCE CARBON EMISSIONS</h4>
                <p>Help in the fight against climate change and reduce the city's carbon footprint.</p>
              </div>
              <div className="imageBox2">
                <img src={moneyIcon} width="250" height="200" alt="Wavy dollar bill" className="energyImage" id="saveMoney" />
                <h4>SAVE MONEY</h4>
                <p>Increased energy effeciency, reduces electric and gas bills.</p>
              </div>
              <div className="imageBox3">
                <img src={improveHealth} width="215" height="190" alt="Lungs" className="energyImage" id="borderImage" />
                <h4>IMPROVE HEALTH</h4>
                <p>Retrofitting helps to improve indoor air quality and reduce mold.</p>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Block2;
