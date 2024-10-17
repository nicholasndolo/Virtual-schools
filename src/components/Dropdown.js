import React from "react";
import './Dropdown.css'
function Dropdown() {
  return (
    // <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">
          enroll
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/stulogin">Educator</a>
          <a href="/loginedu">Student</a>
        </div>
      </div>
    
  );
}
export default Dropdown