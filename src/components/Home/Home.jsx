import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Dynamic Burger</h1>
          <p>Crafting delicious burgers and memorable roleplay experiences!</p>
          <button className="cta-button">Explore Our Menu</button>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-showcase">
        <h2>Meet Our Team</h2>
        <div className="team-images">
          <img src="https://via.placeholder.com/300" alt="Team Member 1" />
          <img src="https://via.placeholder.com/300" alt="Team Member 2" />
          <img src="https://via.placeholder.com/300" alt="Team Member 3" />
        </div>
      </section>

      {/* Business Showcase */}
      <section className="business-showcase">
        <h2>Our Business in Action</h2>
        <div className="business-images">
          <img src="https://via.placeholder.com/400" alt="Business Image 1" />
          <img src="https://via.placeholder.com/400" alt="Business Image 2" />
          <img src="https://via.placeholder.com/400" alt="Business Image 3" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Try the Best Burger?</h2>
        <button className="cta-button">Order Now</button>
      </section>
    </div>
  );
};

export default Home;
