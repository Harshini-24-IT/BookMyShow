import React from "react";

import EntertainmentCardSlider from "../components/Entertainment/Entrtainmentcard.component";
import Premiere from "../components/premiere/Premiere.component";


const HomePage = () => {
    return( 
    <>
     <div className="container mx-auto px-4">
         <h1 className="text-2xl font-bold text-gray-800 my-3">The Best of Entertainment </h1>
      <EntertainmentCardSlider />
      <Premiere />
      </div>
    
    </>
    );
};

export default HomePage;