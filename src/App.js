// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './webPages/Main';
import Login from './webPages/Login';
import SignUp from './webPages/SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
