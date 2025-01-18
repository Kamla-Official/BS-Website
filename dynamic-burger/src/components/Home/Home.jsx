import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Dynamic Burger</h1>
      <p>Your roleplay burger paradise!</p>
      <nav>
        <ul>
          <li><Link to="/menu">Food Menu</Link></li>
          <li><Link to="/employees">Employee List</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/cart">View Cart</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
