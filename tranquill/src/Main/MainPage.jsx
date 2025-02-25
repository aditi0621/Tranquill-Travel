import React from "react";
import { useParams } from "react-router-dom";
import "./MainPage.css";
import HeaderM from "./HeaderM";
import Footer from "./Footer";
import Welcome from "./Welcome";

const MainPage = () => {
  const { userId } = useParams(); // Extract the user ID from the URL

  return (
    <div className="main-container">
      <HeaderM />
      <Welcome userId={userId} /> {/* Pass the userId as a prop if needed */}
      <Footer />
    </div>
  );
};

export default MainPage;
