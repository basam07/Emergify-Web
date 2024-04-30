// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import main page
import Main from "./webPages/Main";
// import police pages
import PoliceLogin from "./webPages/Police/Login";
import PoliceSignUp from "./webPages/Police/SignUp";
import PoliceRequests from "./webPages/Police/Dashboard/Requests";
import PoliceAccepts from "./webPages/Police/Dashboard/Accepts";
import PolicePendings from "./webPages/Police/Dashboard/Pendings";
import PoliceDeclined from "./webPages/Police/Dashboard/Declined";
import PoliceScreen from "./webPages/Police/Dashboard/Screen";
// import fire pages
import FireLogin from "./webPages/Fire/Login";
import FireSignUp from "./webPages/Fire/SignUp";
import FireRequests from "./webPages/Fire/Dashboard/Requests";
import FireAccepts from "./webPages/Fire/Dashboard/Accepts";
import FirePendings from "./webPages/Fire/Dashboard/Pendings";
import FireDeclined from "./webPages/Fire/Dashboard/Declined";
import FireScreen from "./webPages/Fire/Dashboard/Screen";
// import ambulance pages
import AmbulanceLogin from "./webPages/Ambulance/Login";
import AmbulanceSignUp from "./webPages/Ambulance/SignUp";
import AmbulanceRequests from "./webPages/Ambulance/Dashboard/Requests";
import AmbulanceAccepts from "./webPages/Ambulance/Dashboard/Accepts";
import AmbulancePendings from "./webPages/Ambulance/Dashboard/Pendings";
import AmbulanceDeclined from "./webPages/Ambulance/Dashboard/Declined";
import AmbulanceScreen from "./webPages/Ambulance/Dashboard/Screen";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Main page */}
        <Route exact path="/" element={<Main />} />
        {/* Police pages */}
        <Route path="/policelogin" element={<PoliceLogin />} />
        <Route path="/policeSignup" element={<PoliceSignUp />} />
        <Route path="/policerequests" element={<PoliceRequests />} />
        <Route path="/policeaccepts" element={<PoliceAccepts />} />
        <Route path="/policependings" element={<PolicePendings />} />
        <Route path="/policedeclined" element={<PoliceDeclined />} />
        <Route path="/policescreen/:userId" element={<PoliceScreen />} />
        {/* Fire pages */}
        <Route path="/firelogin" element={<FireLogin />} />
        <Route path="/fireSignup" element={<FireSignUp />} />
        <Route path="/firerequests" element={<FireRequests />} />
        <Route path="/fireaccepts" element={<FireAccepts />} />
        <Route path="/firependings" element={<FirePendings />} />
        <Route path="/firedeclined" element={<FireDeclined />} />
        <Route path="/firescreen" element={<FireScreen />} />
        {/* Ambulance pages */}
        <Route path="/ambulancelogin" element={<AmbulanceLogin />} />
        <Route path="/ambulanceSignup" element={<AmbulanceSignUp />} />
        <Route path="/ambulancerequests" element={<AmbulanceRequests />} />
        <Route path="/ambulanceaccepts" element={<AmbulanceAccepts />} />
        <Route path="/ambulancependings" element={<AmbulancePendings />} />
        <Route path="/ambulancedeclined" element={<AmbulanceDeclined />} />
        <Route path="/ambulancescreen" element={<AmbulanceScreen />} />
      </Routes>
    </Router>
  );
};
export default App;
