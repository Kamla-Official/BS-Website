import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Footer from "./components/Footer/Footer"; // Import Footer
import Contact from "./components/Contact/Contact"; // Import Contact
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/contact" element={<Contact />} /> {/* Add Contact Route */}
        </Routes>
        <Footer /> {/* Add Footer */}
      </div>
    </Router>
  );
};

export default App;
