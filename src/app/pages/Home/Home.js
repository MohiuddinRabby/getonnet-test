import React from "react";
import BCarousel from "../../components/BCarousel";
import FindweaponForm from "../Findweapon/FindweaponForm";
import Footer from "../Footer/Footer";
import RiflesList from "../RiflesList/RiflesList";

const Home = () => {
  return (
    <>
      <div id="home" className="home-section">
        <div className="carousel-sectiona">
          <BCarousel />
        </div>
      </div>
      <div className="search-item-section">
        <div className="container text-center">
          <FindweaponForm />
        </div>
      </div>
      <div className="container-fluid rifles-list-section py-5">
        <RiflesList />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
};

export default Home;
