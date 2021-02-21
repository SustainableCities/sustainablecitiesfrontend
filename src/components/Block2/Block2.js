import React from "react";

import './Block2.css'

function Block2() {
  return (
      <div className="block2-background">
          <div className="block2-container">
            <div className="block2-heading">
              <h2>How we determine areas in need of retrofitting.</h2>
              <p>Words words, blah blah blah. </p>
            </div>
            <div className="block2-imagesBox">
              <div className="imageBox1">
                <img src="https://www.fillmurray.com/228/212" width="228" height="212" alt="imageBox1" className="energyImage" />
                <h4>Energy efficiency</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, mauris sed facilisis
                ultricies, neque tortor viverra diam, a lacinia tortor lacus sit amet nibh. Maecenas volutpat tellus
                at tempor mattis. Donec quis est turpis.</p>
              </div>
              <div className="imageBox2">
                <img src="https://placebeard.it/228x212" width="228" height="212" alt="imageBox2" className="energyImage" />
                <h4>Energy efficiency</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, mauris sed facilisis
                ultricies, neque tortor viverra diam, a lacinia tortor lacus sit amet nibh. Maecenas volutpat tellus
                at tempor mattis. Donec quis est turpis.</p>
              </div>
              <div className="imageBox3">
                <img src="https://picsum.photos/228/212" width="228" height="212" alt="imageBox3" className="energyImage" />
                <h4>Energy efficiency</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim, mauris sed facilisis
                ultricies, neque tortor viverra diam, a lacinia tortor lacus sit amet nibh. Maecenas volutpat tellus
                at tempor mattis. Donec quis est turpis.</p>
              </div>
            </div>
          </div>
      </div>
  );
}

export default Block2;
