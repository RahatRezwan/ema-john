import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import google from "../../images/google.svg";
import "./SignUp.css";

const SignUP = () => {
   const { createUser, googleLogin } = useContext(AuthContext);
   const [error, setError] = useState();

   const handleSubmit = (event) => {
      setError(null);
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      const confirm = form.confirm.value;

      if (password.length < 8) {
         setError("Password should have al least 8 characters");
         return;
      }
      if (password !== confirm) {
         setError("Your Password Didn't Match");
         return;
      }
      console.log(email, password, confirm);
      createUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
         })
         .catch((error) => console.log(error));
   };

   /* Google Login */
   const handleGoogleLogin = () => {
      googleLogin()
         .then((result) => {
            const user = result.user;
            console.log(user);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <div className="form-container">
         <h3 className="form-title">Sign Up</h3>
         <form onSubmit={handleSubmit}>
            <div className="form-control">
               <label htmlFor="email">Email</label>
               <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-control">
               <label htmlFor="password">Password</label>
               <input type="password" name="password" placeholder="Password" required />
            </div>
            <div className="form-control">
               <label htmlFor="confirm">Confirm Password</label>
               <input type="password" name="confirm" placeholder="Retype Password" required />
            </div>
            <p className="text-error">{error && error}</p>
            <input className="btn-submit" type="submit" value="Sign Up" />
            <div className="new-user-signup">
               <p>
                  Already have an account?{" "}
                  <span className="signup-link">
                     <Link to="/login">Login</Link>
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

export default SignUP;
