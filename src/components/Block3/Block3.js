import React from "react";

import './Block3.css'
import skylineBoston from './images/skylineBoston.png'

function Block3() {
  return (
      <div className="block3-background">
        <div className="block3-container">
          <div className="block3-textBox">
            <div className="block3-large-text">
              <h3>How do we determine which areas are most in need of retrofitting?</h3>
            </div>
            <div className="block3-small-text">
              <div className="block3-box-text">
                <p>The City of Boston has a Building Energy Reporting and Disclosure Ordinance
                (BERDO) that requires buildings to disclose their annual water and energy usage.
                This data, along with building history, helps us determine which buildings need to go green.</p>
              </div>
            </div>
          </div>
          <div className="block3-image">
            <img src={skylineBoston} width="357" height="536" alt="beautiful landscape" className="block3Image" />
          </div>
        </div>
      </div>
  );
}

export default Block3;
