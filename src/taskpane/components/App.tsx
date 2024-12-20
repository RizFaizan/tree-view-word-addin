/* eslint-disable react/jsx-no-undef */
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./LogIn";
import SignIn from "./SignIn";
import Notfound from "./Notfound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
