import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const navigate = useNavigate();

  // OAuth.jsx
const handleClick = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const res = await signInWithPopup(auth, provider);
    
    sessionStorage.setItem("loginTrigger", "firebase");
    
    setTimeout(() => {
      window.dispatchEvent(new Event("authStateChange"));
      navigate("/");
      console.log(res);
    }, 50);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <button
        onClick={handleClick}
        className="fa-brands fa-google border border-gray-300 bg-white rounded-md p-2"
      ></button>
    </div>
  );
};

export default OAuth;
