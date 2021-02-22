import React from "react";
import './Block4.css'

function Block1() {
  return (
      <>
        <div id="block4-container" >
            <h1 id="h1">See if your home or work building is in need of retrofitting...</h1>
            <p id="p">By searching your address in our system, you will be able to identify whether
            your home is viable for retrofitting, based on factors such as building age class,
            BERDO score, date of last renovation, flood risk, etc.</p>
            <div id="input">
                <input id="text" type="text" placeholder="Search Address..." />
                <input id="submit" type="submit" value="Search"/>
            </div>
        </div>
      </>
  );
}

export default Block1;
