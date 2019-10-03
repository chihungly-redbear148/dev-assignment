import React, { Component } from "react";

class Footer extends Component {
  render = () => {
    return (
      <footer id="main-footer">
        <div className="container footer-container">
          <div>
            <h1>You're gonna</h1>
            <h4>love these</h4>
          </div>
          <div>
            <img
              src="./img/Classic_Knee_High_Black_1116_copy_1000x1000.jpg"
              alt=""
            />
            <p>$59 USD</p>
            <p>Knee High Two Pack</p>

            <img src="./img/ControltopV_KatiepullNC_1000x1000.jpg" alt="" />
            <p>$49 USD</p>
            <p>Shaping Sheers</p>

            <img src="./img/shorties-05_1000x1000.jpg" alt="" />
            <p>$59 USD</p>
            <p>No-Sweat Shortie</p>

            <img src="./img/luxe-02_1000x1000.jpg" alt="" />
            <p>$119 USD</p>
            <p>Luxe Sheers</p>
          </div>
        </div>
      </footer>
    );
  };
}

export default Footer;
