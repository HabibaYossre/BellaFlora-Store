import React from 'react';
import "./Login.css"; 
function SignUp() {
  return (
    <div className="login-container">
        
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
         <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />    
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
       
       <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" name="password" />
        </div>
       
        <button type="submit" >SignUp</button>
      </form>
    </div>
  );
};
export default SignUp;