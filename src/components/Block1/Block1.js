import React from "react";
import './Block1.css'

function Block1() {
  return (
      <>
        <div id="block1-container" >
          <h2 id="titleSpan" >Use our interactive map to identify sustainable retrofitting
          opportunites in Boston</h2>
          <p>GreenOps is a visualization tool that highlights areas of the city that are ideal
          for retrofits. It aims to make data accessible to homeowners, lenders, contactors & residents,
          with the ultimate goal of stimulating a green economy, and helping the city reach sustainability goals.</p>
          <div id="buttons-container" >
            <a id="goToMapB" href="/map">
              <div id="mapBtn">
                  <span>Go To Interactive Map</span>
              </div>
            </a>
            <div id="learnMore">
                <span>Learn more</span>
            </div>
          </div>
        </div>
      </>
  );
}

export default Block1;
