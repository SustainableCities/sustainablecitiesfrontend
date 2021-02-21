import React from "react";
import './Block1.css'

function Block1() {
  return (
      <>
        <div id="block1-container" >
          <span id="titleSpan" >GreenOps</span>
          <span>Helping Boston identify sustainable retrofit opportunites</span>
          <div id="buttons-container" >
            <div id="mapBtn">
                <span>Go to Interactive Map</span>
            </div>
            <div id="learnMore">
                <span>Learn more</span>
            </div>
          </div>
        </div>
      </>
  );
}

export default Block1;

  