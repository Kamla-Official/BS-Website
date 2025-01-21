import React, { useState, useEffect } from 'react';
import './FoodMenu.css';

const FoodMenu = () => {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwwH1nSvRMOx5d5U6gDihBbS0HB8FS98e8ENJxT07vOsj3d4BH4swNz2QGcUNAqpPsK/exec');
        const data = await response.json();
        setMenuData(data.menu); // Accessing menu data from the response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Group items by category
  const groupedItems = menuData.reduce((acc, item) => {
    const { catagory } = item;
    if (!acc[catagory]) {
      acc[catagory] = [];
    }
    acc[catagory].push(item);
    return acc;
  }, {});

  return (
    <div className="menu-list">
      <h2>Our Food Menu</h2>
      {loading ? (
        <p>Loading menu...</p>
      ) : (
        Object.keys(groupedItems).map((category) => (
          <div className="category-section" key={category}>
            <h3 className="category-title">{category}</h3>
            <div className="menu-cards">
              {groupedItems[category].map((item, index) => (
                <div className="menu-card" key={index}>
                  <img src={item.image_url || "https://dynamiccraft-gallery.netlify.app/public/dbs.png"} alt={item.name} className="menu-img" />
                  <div className="menu-info">
                    <h3>{item.name}</h3>
                    <p className="category">{item.catagory}</p>
                    <p className="description">{item.description}</p>
                    <p className="price">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FoodMenu;
