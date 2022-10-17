import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import google from "../../images/google.svg";
import { AuthContext } from "../../context/UserContext";

const Login = () => {
   const { loginUser, googleLogin } = useContext(AuthContext);
   const navigate = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      loginUser(email, password)
         .then((result) => {
            const user = result.user;
            form.reset();
            navigate("/");
         })
         .catch((error) => console.log(error));
   };

   /* Google Login */
   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div className="form-container">
         <h3 className="form-title">Login</h3>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder="Password" required />
            </div>
            <input className="btn-submit" type="submit" value="Login" />
            <div className="new-user-signup">
               <p>
                  New to Ema-john?{" "}
                  <span className="signup-link">
                     <Link to="/signup">Create New Account</Link>
                  </span>
               </p>
            </div>
            <div className="or">
               <hr /> <span>or</span> <hr />
            </div>

            <button onClick={handleGoogleLogin} className="google-btn" type="submit">
               <img src={google} alt="google-logo" />
               Continue With Google
            </button>
         </form>
      </div>
   );
};

export default Login;
