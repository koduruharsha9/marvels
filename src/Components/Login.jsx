import React from "react";
 import './Login.css'; 

 function Login() {
  return (
    <div className="container">
      <h3>Login Form </h3>
       <form>
         <div className="loginForm">

          <label For="Email1">Email address:</label>
          <input type="email" id="email"/><br></br>

          <label for="password">password:</label>
           <input type="password" id="password"/><br></br>
          <button type="Login">Login</button>
          
        </div>
       </form>
    </div>
   );
 }

export default Login;
