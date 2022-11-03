import React from "react";
import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Resources from "./Resources";
import CalenDar from "./Calendar";
import { BrowserRouter as Router } from "react-router-dom";

const Learn = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="side-res">
          <Sidebar />
          <Resources />
          <CalenDar />
        </div>
      </div>
    </>
  );
};

export default Learn;
