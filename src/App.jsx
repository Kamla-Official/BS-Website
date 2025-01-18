import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import FoodMenu from './components/FoodMenu/FoodMenu';
import EmployeeList from './components/EmployeeList/EmployeeList';
import './App.css';

const App = () => {
  return (
    <Router>
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<FoodMenu />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
