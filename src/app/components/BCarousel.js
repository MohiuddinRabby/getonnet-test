import React from "react";
import { Carousel } from "react-bootstrap";
import IMG from "../img/image 5.png";
const BCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1 className="font-title">Brand new Ak47 short Gun</h1>
                <h3 className="color-secondary font-title">-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn button-main">Order Now</button>
              </div>
              <div className="col-md-6 mt-5 text-center">
                <div className="circular">
                  <img src={IMG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1 className="font-title">Brand new Ak47 short Gun</h1>
                <h3 className="color-secondary font-title">-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn button-main">Order Now</button>
              </div>
              <div className="col-md-6 mt-5 text-center">
                <div className="circular">
                  <img src={IMG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1 className="font-title">Brand new Ak47 short Gun</h1>
                <h3 className="color-secondary font-title">-20% Discount</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  earum nisi quae quam aperiam commodi repellendus atque harum!
                  Odio, nostrum!
                </p>
                <button className="btn button-main">Order Now</button>
              </div>
              <div className="col-md-6 mt-5 text-center">
                <div className="circular">
                  <img src={IMG} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BCarousel;
