import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App";
import SignIn from "./signin";
import HotelBooking from "./HotelBooking"; // Import the new component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/booking" element={<HotelBooking />} /> {/* New route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
