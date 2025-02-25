import React from "react";
import "./LiveInNature.css";
import HeaderM from "./HeaderM";
import Footer from "./Footer";
import Live1 from "../Live/Live1";
import Live2 from "../Live/Live2";
import Live3 from "../Live/Live3";

const LiveInNature = () => {
  return (
    <div className="live-in-nature-container">
      <HeaderM></HeaderM>
      <Live1></Live1>
      <Live2></Live2>
      <Live3></Live3>
      <Footer></Footer>
    </div>
  );
};

export default LiveInNature;
