import React, { createContext, useEffect, useState } from "react";
import {
   getAuth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

/* Google Auth Provider */
const googleProvider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
   const [user, setUser] = useState(null);

   /* Create User */
   const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
   };

   /* Login With Google */
   const googleLogin = () => {
      return signInWithPopup(auth, googleProvider);
   };

   /* Login a user using email and password */
   const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* Log out a user */
   const logoutUser = () => {
      return signOut(auth);
   };

   /* Get the current user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("current user: ", currentUser);
         setUser(currentUser);
      });

      return () => unsubscribe();
   }, []);

   const authInfo = { user, createUser, googleLogin, loginUser, logoutUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default UserContext;
