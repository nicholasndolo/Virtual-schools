import React, { useState, } from "react"
import CreateApprover from "../Approver/createApprover";
import Login from "../Approver/Login"
import './Auth.css';

 function Auth (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
         <Login/>
         <p>
              <div className="text-center">
              Dont have an account yet?{" "} <br/>
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up 
              </span> here
              </div> 
              </p>    
          
        
      </div>
    )
  }
  return (
    <div className="Auth-form-container">
      <CreateApprover/>
      <p>
          <div className="text-center">
            Already have an account? {" "} <br/>
            <span className="link-primary" onClick={changeAuthMode}>
              Login
            </span> here
          </div>
          </p>
        </div>      
  )
}
export default Auth;