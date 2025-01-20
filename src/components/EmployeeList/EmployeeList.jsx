import React, { useEffect, useState } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbwwH1nSvRMOx5d5U6gDihBbS0HB8FS98e8ENJxT07vOsj3d4BH4swNz2QGcUNAqpPsK/exec"
        );
        const data = await response.json();
        setEmployees(data.employees);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="team-section">
      <h2>Meet the Team</h2>
      {loading ? (
        <p>Loading team data...</p>
      ) : (
        <div className="team-row">
          {employees.map((employee, index) => (
            <div key={index} className="team-card">
              <div className="card-image">
                <img
                  src={employee.image_url || "https://via.placeholder.com/120"}
                  alt={employee.name}
                />
              </div>
              <div className="card-content">
                <h3>{employee.role}</h3>
                <h4>{employee.name}</h4>
                <p>{employee.description}</p>
              </div>
              <div className="social-links">
                {employee.linkedin && (
                  <a href={employee.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {employee.twitter && (
                  <a href={employee.twitter} className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
                {employee.github && (
                  <a href={employee.github} className="social-icon" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
