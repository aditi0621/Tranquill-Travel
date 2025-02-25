import React, { useEffect, useState } from "react";
import Medi1 from "../Meditation/Medi1";
import Medi2 from "../Meditation/Medi2";
import Medi3 from "../Meditation/Medi3";
import Medi4 from "../Meditation/Medi4";
import HeaderM from "./HeaderM";
import Footer from "./Footer";

const Meditation = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error("No userId found in localStorage");
    }
  }, []);

  return (
    <div className="meditation-container">
      <HeaderM />
      {userId ? (
        <>
          <Medi1 userId={userId} />
          <Medi2 userId={userId} />
          <Medi3 userId={userId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
      <Medi4 />
      <Footer />
    </div>
  );
};

export default Meditation;
