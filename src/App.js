// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./webPages/Main";
import Login from "./webPages/Police/policeLogin";
import SignUp from "./webPages/Police/pSignUp";
import Dashboard from "./webPages/Police/Dashboard/Requests";
// import Dashboard from "./webPages/Police/Dashboard/Requests";
// import Login from "./webPages/Fire/Login";
// import fireSignUp from "./webPages/Fire/SignUp";
// import fireDashboard from "./webPages/Fire/Dashboard";
// import ambulanceLogin from "./webPages/Ambu/Login";
// import ambulanceSignUp from "./webPages/Ambu/SignUp";
// import ambulanceDashboard from "./webPages/Ambu/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/policelogin" element={<Login />} />
        <Route path="/policeSignup" element={<SignUp />} />
        <Route path="/policeRequests" element={<Dashboard />} />

        {/* <Route path="/policeDashboard" element={<Dashboard />} /> */}
        {/* <Route path="/fireLogin" element={<fireLogin />} /> */}
        {/* <Route path="/fireSignup" element={<fireSignUp />} /> */}
        {/* <Route path="/fireDashboard" element={<fireDashboard />} /> */}
        {/* <Route path="/ambulanceLogin" element={<ambulanceLogin />} /> */}
        {/* <Route path="/ambulanceSignup" element={<ambulanceSignUp />} /> */}
        {/* <Route path="/ambulanceDashboard" element={<ambulanceDashboard />} /> */}
      </Routes>
    </Router>
  );
};
export default App;
