import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Signup from "./signup";
const Routers = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/s" element={<LandingPage />} />
          <Route path="/" element={<Signup/>}/>
        </Routes>
      </Router>
    </>
  );
};
export default Routers;
