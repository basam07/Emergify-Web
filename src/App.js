// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './webPages/Main';
import Login from './webPages/Police/Login';
import SignUp from './webPages/Police/SignUp';
import Dashboard from './webPages/Police/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
