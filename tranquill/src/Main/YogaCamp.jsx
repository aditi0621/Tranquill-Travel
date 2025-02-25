import React from "react";
// Import CSS file for styling
import Footer from "./Footer";
import HeaderM from "./HeaderM";
import Yoga1 from "../Yoga/Yoga1";
import Yoga2 from "../Yoga/Yoga2";

const YogaCamp = () => {
  return (
    <div className="yoga-camp-container">
      <HeaderM></HeaderM>
      <Yoga1></Yoga1>
      <Yoga2></Yoga2>
      <Footer></Footer>
    </div>
  );
};

export default YogaCamp;
