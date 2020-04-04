import React from "react";
import "./login.css"


const Login = () =>{

    return(
        <div id="login-box">
  <div class="left">
    <h1>Login</h1>
    
    <input type="text" name="email" placeholder="E-mail" />
    <input type="password" name="password" placeholder="Password" />
    
    <input type="submit" name="signup_submit" value="Login" />
  </div>
  
  <div id="right">
    <span class="loginwith"><br /><br/><br/><br/></span>
    
    {/* <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button> */}
    <a href="/auth/google"><button class="social-signin google">Log in with Google+</button></a> 
  </div>
  <div class="or">OR</div>
</div>

    )
}

export default Login