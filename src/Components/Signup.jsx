import React from "react";
import './Signup.css';

export default function Signup() {
  return (
    <div className="container"  >
      <h3>Sign up</h3>
      <form>
        <div className="signUpForm">
          <label For="Username">Username:</label>
          <input type="email" id="username"/>
            <br />
       
          <label For="password">Password:</label>
          <input type="password" id="password"/>
            <br />

          <label For="confirmPwd">Confirm Password</label>
          <input type="password" id="confirmPwd"/>
            <br />
            <button type="Submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
