import "./SignUp.css";
import React, { useState } from "react";
import { auth, db } from "../../index";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function PoliceSignUp() {
  // State variables for form inputs and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNoError, setPhoneNoError] = useState("");
  const [cnicError, setCnicError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [conPasswordError, setConPasswordError] = useState("");

  const loginHandle = () => {
    // Redirect to ambulance login page
    window.location.href = "/policelogin";
  };

  const signupHandle = async (event) => {
    event.preventDefault();

    // Reset previous errors
    setNameError("");
    setEmailError("");
    setPhoneNoError("");
    setCnicError("");
    setPasswordError("");
    setConPasswordError("");

    // Validate form inputs
    if (!name) {
      setNameError("Please enter your full name");
      return;
    }
    if (!email) {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (!phoneNo) {
      setPhoneNoError("Please enter your mobile number");
      return;
    }
    // insert regex for check phone number
    const phoneRegex = /^03[0-9]{9}$/; //for 03081111111
    if (!phoneRegex.test(phoneNo)) {
      setPhoneNoError("Please enter your corrent Phone Number {03012345678}");
      return;
    }
    if (!cnic) {
      setCnicError("Please enter your CNIC");
      return;
    }
    if (!password) {
      setPasswordError("Please enter a password");
      return;
    }
    if (!conPassword) {
      setConPasswordError("Please confirm your password");
      return;
    }
    if (password !== conPassword) {
      setConPasswordError("Passwords do not match");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userId = userCredentials.user.uid; // get current user firebase ID
      await saveUserInDb(userId);
      alert("Sign up successful");
      // Redirect to login after successful signup
      console.log("Login successful");
      window.location.href = "/policelogin";
    } catch (error) {
      console.log("!!!!Error signing up:", error.message);
      // Handle specific errors like email already exists, etc.
      // Update state to show appropriate error messages
    }
  };

  //save user data in DB
  const saveUserInDb = async (userId) => {
    await setDoc(doc(db, "police", userId), {
      name: name,
      email: email,
      phoneNo: phoneNo,
      cnic: cnic,
    });
    console.log("!!!!User saved in DB successfully");
  };

  return (
    <div className="Main">
      {/* Navigation bar */}
      <nav>
        <div className="logo">
          <img src="./images/logo-nav.png" alt="Emergify Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <button href="#" className="nav-btn" onClick={loginHandle}>
              Login
            </button>
          </li>
          <li>
            <button href="#" className="nav-btn">
              About Us
            </button>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="container">
        {/* Background image */}
        <div className="background">
          <img src="./images/back.jpg" alt="Background" />
        </div>
        {/* Sign Up form */}
        <div className="signup-form custom-scrollbar">
          <h2>Sign Up</h2>
          <form>
            {/* Name input */}
            <div className="s-form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {nameError && <div className="error">{nameError}</div>}
            </div>
            {/* Email input */}
            <div className="s-form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <div className="error">{emailError}</div>}
            </div>
            {/* Phone number input */}
            <div className="s-form-group">
              <label htmlFor="phoneNo">Mobile Number:</label>
              <input
                type="text"
                id="phoneNo"
                placeholder="Enter your mobile number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              {phoneNoError && <div className="error">{phoneNoError}</div>}
            </div>
            {/* CNIC input */}
            <div className="s-form-group">
              <label htmlFor="cnic">CNIC:</label>
              <input
                type="text"
                id="cnic"
                placeholder="Enter your CNIC"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
              />
              {cnicError && <div className="error">{cnicError}</div>}
            </div>
            {/* Password input */}
            <div className="s-form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>
            {/* Confirm password input */}
            <div className="s-form-group">
              <label htmlFor="conPassword">Confirm Password:</label>
              <input
                type="password"
                id="conPassword"
                placeholder="Confirm your password"
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
              />
              {conPasswordError && (
                <div className="error">{conPasswordError}</div>
              )}
            </div>
            {/* Sign Up button */}
            <button className="signUp-btn" type="submit" onClick={signupHandle}>
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
                />
              </svg>
              <div className="text">Sign Up</div>
            </button>
            {/* Note */}
            <p className="note">
              Note: <br />
              <il>If you already have an account, </il> <br />
              <il>click Login button to proceed to the Dashboard.</il>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PoliceSignUp;
