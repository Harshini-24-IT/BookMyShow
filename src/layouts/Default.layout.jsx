import React from "react";
import Navbar from "../components/Navbar/navbar.component";
import HeroSlider from "../components/Hero Carousal/HeroCarousal.component";




const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroSlider />
      {props.children}
    </>
  );
};

export default DefaultLayout;