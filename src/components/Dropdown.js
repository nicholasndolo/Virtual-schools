import React from "react";
import './Dropdown.css'
function Drop() {
  return (
    // <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">
          enroll
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          {/* <a href="/login">Owner</a> */}
          <a href="/stulogin">Educator</a>
          <a href="/loginedu">Student</a>
        </div>
      </div>
    // </div>
  );
}
export default Drop