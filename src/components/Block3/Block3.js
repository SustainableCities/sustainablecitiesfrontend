import React from "react";

import './Block3.css'

function Block3() {
  return (
      <div className="block3-background">
        <div className="block3-textBox">
          <div className="block3-large-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar
            enim non nulla egestas, sed dignissim dui blandit. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Donec malesuada, ligula ac semper convallis,
            nulla ex ullamcorper nisl, id venenatis nunc felis vel eros. Integer.</p>
          </div>
          <div className="block3-small-text">
            <div className="block3-box-text">
              <p>Phasellus id libero in metus venenatis faucibus. Morbi posuere vehicula vehicula.
              Fusce vel erat id ex eleifend consequat. Vestibulum mollis et augue vitae
              sollicitudin. Praesent neque sem, euismod ac dictum sit amet.</p>
            </div>
            <div className="block3-truck-text">
              <p>Donec accumsan eu enim et ultricies. Phasellus viverra, massa nec posuere tincidunt,
              ligula sapien pharetra mauris, nec condimentum ex sapien sed ligula. Phasellus lobortis
              ipsum nec.</p>
            </div>
          </div>
        </div>
        <div className="block3-image">
          <img src="http://placeimg.com/540/440/nature" width="540" height="440" alt="beautiful landscape" className="block3Image" />
        </div>
      </div>
  );
}

export default Block3;
