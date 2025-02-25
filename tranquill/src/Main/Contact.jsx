import React from "react";

import "./ContactUs.css";
import Footer from "./Footer";
import HeaderM from "./HeaderM";
import C1 from "../Contact/C1";

const Contact = () => {
  return (
    <div className="contact-container">
      <HeaderM></HeaderM>
      <C1></C1>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
