import React from "react";
import gunImg from "../../img/Gun-illustration-set-Premium-Vector-PNG.png";
import gunImgTwo from "../../img/rifle-gun-with-bullets-png.png";
const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <div class="card footer-card" id="footer-card-one">
            <div className="row">
              <div className="col-md-6 p-4 mt-4">
                <h6 className="color-secondary footer-font-title-secondary">
                  -20% Discount
                </h6>
                <h5 className="footer-font-title-main">Discount on Rifles</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  harum.
                </p>
                <div className="btn button-main mt-4">Order Now</div>
              </div>
              <div className="col-md-6 mt-4">
                <img src={gunImg} alt="" />
                <img src={gunImgTwo} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div class="card footer-card" id="footer-card-two">
            <div className="row">
              <div className="col-md-6 p-4 mt-4">
                <h6 className="color-secondary footer-font-title-secondary">
                  -20% Discount
                </h6>
                <h5 className="footer-font-title-main">Discount on Shotgun</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  harum.
                </p>
                <div className="btn button-main mt-4">Order Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
