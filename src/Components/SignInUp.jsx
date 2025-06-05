import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OAuth from "./OAuth/OAuth";

const SignInUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const validateSignUp = () => {
    const newErrors = {};
    if (!fullname.trim()) newErrors.fullname = "FullName is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Invalid format of email";
    if (!password.trim()) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "Password must be at least 6 characters long and include letters & numbers";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignIn = () => {
    const newErrors = {};
    if (!mail.trim()) newErrors.mail = "Email is required";
    else if (!emailRegex.test(mail)) newErrors.mail = "Invalid format of email";
    if (!pass.trim()) newErrors.pass = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateSignUp()) return;

    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
      }),
    });

    // const data = await response.json();
    if (response.ok) {
      toast.success("User registered successfully!");
      setIsSignUp(false);
    } else {
      toast.warning("User already exist");
    }
  };

  const handleSignIn = async () => {
    if (!validateSignIn()) return;

    try {
        const response = await fetch("http://localhost:3001/signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: mail, password: pass }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Login failed"); // ✅ Ensure error message is shown
        }

        // ✅ Store token and user details
        
        localStorage.setItem("user", JSON.stringify(data.user)); // Save full user info
        localStorage.setItem("token", data.token);
        sessionStorage.removeItem("firstLogin");

        toast.success(`Welcome back ${data.user.fullname}`);

        // ✅ Navigate after a slight delay for state update
        setTimeout(() => {
            navigate("/"); // Redirect after login
            window.dispatchEvent(new Event("authStateChange")); 
        }, 100);

    } catch (error) {
        toast.error(error.message);
    }
};


  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative w-[800px] max-w-full min-h-[500px] bg-white rounded-3xl shadow-xl flex overflow-hidden">
        <div className="w-1/2 bg-gradient-to-r from-red-700 to-red-900 text-white flex flex-col items-center justify-center px-8 text-center rounded-l-3xl ">
          <h2 className="text-2xl font-bold">
            {isSignUp ? "Welcome Back!" : "Hello, User!"}
          </h2>
          <p className="text-sm my-4">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
          </p>
          <button
            onClick={toggleForm}
            className="border border-white text-white font-bold text-sm uppercase px-6 py-2 rounded-lg mt-4 transition duration-300 hover:bg-white hover:text-red-700"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <div className="w-1/2 flex-col px-8 relative flex justify-center items-center bg-gradient-to-r">
          {/* SignIn*/}
          <div
            className={`absolute w-full flex flex-col items-center justify-center px-8 transition-all duration-500 ${
              isSignUp
                ? "opacity-0 scale-95 translate-x-10 pointer-events-none"
                : "opacity-100 scale-100 translate-x-0"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <div className="flex space-x-3 mb-4">
              <Link
                to="#"
                className="fab fa-facebook-f border border-gray-300 bg-white rounded-md p-2"
              ></Link>
              <Link to="#" className="">
                <OAuth />
              </Link>
              <Link
                to="#"
                className="fab fa-linkedin-in border border-gray-300 bg-white rounded-md p-2"
              ></Link>
            </div>
            <p className="text-sm mb-4">or use your email account</p>

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 border p-2 rounded-lg w-full my-2 outline-none"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {errors.mail && (
              <p className="text-red-500 text-xs">{errors.mail}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border p-2 rounded-lg w-full my-2 outline-none"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            {errors.pass && (
              <p className="text-red-500 text-xs">{errors.pass}</p>
            )}

            <Link to="#" className="text-xs text-gray-600 my-2">
              Forgot password?
            </Link>
            <button
              onClick={handleSignIn}
              className="bg-black hover:bg-red-600 transition duration-500 text-white font-bold text-sm uppercase px-6 py-2 rounded-lg mt-4"
            >
              Sign In
            </button>
          </div>

          {/* SignUp */}
          <div
            className={`absolute w-full flex flex-col items-center justify-center px-8 transition-all duration-500 ${
              isSignUp
                ? "opacity-100 scale-100 translate-x-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-x-10 pointer-events-none"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="flex space-x-3 my-4">
              <Link
                to="#"
                className="fab fa-facebook-f border border-gray-300 bg-white rounded-md p-2"
              ></Link>
              <Link to="#" className="">
                <OAuth />
              </Link>
              <Link
                to="#"
                className="fab fa-linkedin-in border border-gray-300 bg-white rounded-md p-2"
              ></Link>
            </div>
            <p className="text-sm mb-4">or use your email account</p>

            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-200 border p-2 rounded-lg w-full my-2 outline-none"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullname && (
              <p className="text-red-500 text-xs">{errors.fullname}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 border p-2 rounded-lg w-full my-2 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}

            <input
              type="password"
              placeholder="Password"
              className="bg-gray-200 border p-2 rounded-lg w-full my-2 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}

            <button
              onClick={handleSignUp}
              className="bg-black hover:bg-red-600 transition duration-500 text-white font-bold text-sm uppercase px-6 py-2 rounded-lg mt-4"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
