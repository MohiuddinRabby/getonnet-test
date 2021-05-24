import React from "react";
import BCarousel from "../../components/BCarousel";
import FindweaponForm from "../Findweapon/FindweaponForm";

const Home = () => {
  return (
    <>
      <div id="home" className="home-section">
        <div className="carousel-sectiona">
          <BCarousel />
        </div>
      </div>
      <div  className="search-item-section">
        <div className="container text-center">
          <FindweaponForm />
        </div>
      </div>
    </>
  );
};

export default Home;
