import React from "react";
import { Outlet } from "react-router-dom";

const BookScreen = () => {
  return (
    <div
        className="home-screen-container"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/body-bg-tl.jpg"
          })`,
          position: "absolute",
          zIndex: 0,
          left: "0px",
          overflow: "hidden",
          width: "100%",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 0px",
          backgroundSize: "1676px 500px, contain",
        }}
      >
     
      <div className="container">
        
        <Outlet /></div>
        </div>
   
  );
};

export default BookScreen;
