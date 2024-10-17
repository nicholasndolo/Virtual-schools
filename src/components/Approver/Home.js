import React from "react";
import School from "./Schools";
import Student from "./Students";
import Educator from "./Educators";
import './Owner.css'


function Home() {
  return (
   <div className="App">
      <Educator />
      <School />
      <Student />
      </div>
  );
}

export default Home;
