import React from "react";
import HeaderM from "./HeaderM";
//import Footer from "./Footer";
import M1 from "../MyPackage/M1";
import M2 from "../MyPackage/M2";
import "./MyPackage.css";

const MyPackage = () => {
  return (
    <div className>
      <HeaderM />
      <M1></M1>
      <M2></M2>
    </div>
  );
};

export default MyPackage;
