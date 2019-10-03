import React, { Component } from "react";

class MainContent extends Component {
  showImage = imgName => {
    let curImage = document.getElementById("zoom");

    // curImage.src = imgName;
    // Image.alt = imgName;
    // curImage.title = imgName;
  };
  render = () => {
    return (
      <section id="home-articles" className="py-2">
        <div className="container">
          <h4 className="titlecategory"> All products /Classics</h4>

          <div className="articles-container">
            <article className="card">
              <div className="wrapper">
                <img
                  id="zoom"
                  src="./img/Mainpic.jpg"
                  alt="./img/Mainpic.jpg"
                  title="./img/Mainpic.jpg"
                />
              </div>

              <div>
                <img
                  className="thumbnail"
                  src="./img/Classic_Black_Strength_1201_1000x1000.jpg"
                  alt=""
                  onClick={this.showImage}
                ></img>
                <img
                  className="thumbnail"
                  src="./img/Classic-Black_0313_v1_1000x1000.jpg"
                  alt="./img/Classic-Black_0313_v1_1000x1000.jpg"
                  title="./img/Classic-Black_0313_v1_1000x1000.jpg"
                  onClick={this.showImage}
                ></img>
                <img
                  className="thumbnail"
                  src="./img/nudes-04_1000x1000.jpg"
                  alt=""
                  onClick={this.showImage}
                />
                <img
                  className="thumbnail"
                  src="./img/nudes-05_1000x1000.jpg"
                  alt=""
                />
                <img
                  className="thumbnail"
                  src="./img/nudes-06_1000x1000.jpg"
                  alt=""
                />
              </div>
              <div>Vid goes here</div>
            </article>

            <article className="card">
              <div>
                <div className="category category-sports">
                  <h1>Classic</h1>
                  <h4>sheers</h4>
                  <h2>$59 usd</h2>
                  <br></br>
                  <br></br>
                </div>
                <div>
                  Our Classic sheers. Powered by patent-pending Sheertex Knit
                  Technology. The only sheers made with the world's strongest
                  polymer. One of TIME Magazine's Best Inventions of 2018.
                  Because we believe that you deserve a wardrobe as unbreakable
                  as you.
                </div>
                <div className="reviews">
                  <a href="reviews.html">128 reviews</a>
                </div>
                <div>images of colorpads</div>

                <div>dropdown type</div>

                <div className="box">
                  <a className="button" href="#popup1">
                    Find your size
                  </a>
                </div>

                <div id="popup1" className="overlay">
                  <div className="popup">
                    <h3>Sizing Chart</h3>
                    <a className="close" href="#">
                      &times;
                    </a>
                    <div className="content">
                      <img src="./img/nudes-06_1000x1000.jpg" alt="" />
                    </div>
                  </div>
                </div>

                <div>quantity</div>
                <button className="bag">ADD TO BAG</button>
                <p className="mix">
                  MIX + MATCH + SAVE
                  <span className="extra" cursor="pointer">
                    <li>Buy any 3 things, save 10%</li>
                    <li>Buy any 5 things, save 15% </li>
                    <li>Buy any 6 things, save 20$</li>
                  </span>
                </p>
                <p>Details</p>
                <p>Care instructions</p>
                <p>Shipping & returns</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  };
}

export default MainContent;
