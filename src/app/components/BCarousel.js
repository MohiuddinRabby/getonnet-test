import React from "react";
import { Carousel } from "react-bootstrap";
import IMG from "../img/86264387_10220653220381678_8930297397154676736_o.jpg";
const BCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1>Brand new Ak47 short Gun</h1>
                <h3>-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn btn-success">Order Now</button>
              </div>
              <div className="col-md-6 text-center pt-5">
                <img className="circular-square" src={IMG} alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1>Brand new Ak47 short Gun</h1>
                <h3>-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn btn-success">Order Now</button>
              </div>
              <div className="col-md-6 text-center pt-5">
                <img className="circular-square" src={IMG} alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1>Brand new Ak47 short Gun</h1>
                <h3>-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn btn-success">Order Now</button>
              </div>
              <div className="col-md-6 text-center pt-5">
                <img className="circular-square" src={IMG} alt="" />
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BCarousel;
