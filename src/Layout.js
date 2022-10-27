import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";


const Layout = ({ children }) => {
   // let location = useLocation
    const { home } = useLocation();
  
    return (
      <div>
        {home !== "/" ? <Header /> : null}
        <div>{children}</div>
      </div>
    );
  };

  export default Layout