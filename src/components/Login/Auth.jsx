import React, { useState, } from "react"
import CreateOwner from "../Owners/CreateOwner"


 function Auth (props) {
  let [authMode, setAuthMode] = useState("signin")

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
         <img src="https://media.istockphoto.com/photos/male-high-school-friends-studying-together-picture-id1372615072?b=1&k=20&m=1372615072&s=170667a&w=0&h=sVLQbvM-Jry6bMXCS4owJQ40RnUNMIKpb2vX_zIgdtE=" alt="" />
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Welcome back</h3>
            <h4 className="Auth-form-subtitle">enter details here: </h4>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                required
                pattern=".{8,}"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-info">
                Sign In
              </button>
            </div>
           <p>
              <div className="text-center">
              Dont have an account yet?{" "} <br/>
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up 
              </span> here
            </div>
            </p>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className="Auth-form-container">
      <CreateOwner/>
          <div className="text-center">
            Already have an account? {" "} <br/>
            <span className="link-primary" onClick={changeAuthMode}>
              Login
            </span> here
          </div>
        </div>      
  )
}
export default Auth;