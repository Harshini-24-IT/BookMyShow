import React from "react";

// Components
import Navbar from "../components/Navbar/navbar.component";
import HeroCarousal from "../components/Hero Carousal/HeroCarousal.component";

const DefaultLayout = (props) => {
  return (
    <>
      <Navbar />
      <HeroCarousal />
      {props.children}
    </>
  );
};

export default DefaultLayout;