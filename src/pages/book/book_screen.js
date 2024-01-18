import React from "react";
import { Outlet } from "react-router-dom";

const BookScreen = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default BookScreen;
