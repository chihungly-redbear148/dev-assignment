import React, { Component } from "react";

class Header extends Component {
  render = () => {
    return (
      <header>
        <nav id="main-nav">
          <div className="container">
            <img
              src="./img/Sheertex_Logo_RGB_Black copy.png"
              alt="Sheertex"
              className="logo"
            />

            <div>
              <ul>
                <li>
                  <a className="current" href="allproducts.html">
                    ALL PRODUCTS
                  </a>
                </li>

                <li>
                  <a href="features.html">FEATURES</a>
                </li>

                <li>
                  <a href="ourstory.html">OUR STORY</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  };
}
export default Header;
