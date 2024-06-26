import "./Login.css";
import React, { useState } from "react";
import { auth } from "../../index";
import { signInWithEmailAndPassword } from "firebase/auth";

const PoliceLogin = () => {
  // State variables for form inputs and errors
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signupHandle = () => {
    window.location.href = "/policeSignup";
  };

  const loginHandle = (event) => {
    event.preventDefault(); // Prevent default form submission
    // Reset any previous error messages
    setEmailError("");
    setPasswordError("");

    // firebase authentication for login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        // console.log("login succesfully", userCredentials);
        // If validation passes, proceed with login
        window.location.href = "/policerequests";
      })
      .catch((error) => {
        console.log("!!!!!!user not found", error);
        if (error.code === "auth/user-not-found") {
          setEmailError("User not found");
        } else if (error.code === "auth/wrong-password") {
          setPasswordError("Wrong password");
        }
      });

    // Validate email and password
    if (!email) {
      setEmailError("Please enter your Email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your Password");
      return;
    }
  };

  return (
    <div className="Main">
      <nav>
        <div className="logo">
          <img src="./images/logo-nav.png" alt="Emergify Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn" onClick={signupHandle}>
              Sign Up
            </button>
          </li>
          <li>
            <button href="#" className="nav-btn">
              About Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Home */}
      <div className="container">
        <div className="background">
          {/* Background image */}
          <img src="./images/back.jpg" alt="Background" />
        </div>

        <div className="login-form">
          {/* Login form */}
          <h2>Login</h2>
          <form onSubmit={loginHandle}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            <button className="login-btn" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                ></path>
              </svg>
              <div className="text">Login</div>
            </button>
            <p className="note">
              Note: <br />
              <span>If you haven't signed up yet?</span> <br />
              <span>Click Sign Up Button to create an account.</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PoliceLogin;
