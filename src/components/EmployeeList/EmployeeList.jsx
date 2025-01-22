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

  // Group employees by their role
  const groupedEmployees = employees.reduce((acc, employee) => {
    const { role } = employee;
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(employee);
    return acc;
  }, {});

  return (
    <div className="team-section">
      <h1 className="team-title">Meet the Team</h1>
      {loading ? (
        <p className="loading-text">Loading team data...</p>
      ) : (
        Object.keys(groupedEmployees).map((role) => (
          <div className="role-section" key={role}>
            <h3 className="role-title">{role}</h3>
            <div className="team-row">
              {groupedEmployees[role].map((employee, index) => (
                <div key={index} className="team-card">
                  <div className="card-image">
                    <img
                      src={employee.image_url || "https://cdn.discordapp.com/attachments/1133163647254925342/1178844098820591717/Screenshot_588-2-1.png?ex=6790da5f&is=678f88df&hm=5ac7d9829861a0f8157347280f3fac5cbb84ff9903bbcd0b76d3d700602d5b8e&"}
                      alt={employee.name}
                    />
                  </div>
                  <div className="card-content">
                    <h4 className="name">{employee.name}</h4>
                    <p className="description">
                      {employee.description || "No description available."}
                    </p>
                    {employee.contact && (
                      <p className="contact">
                        <i className="fas fa-phone-alt"></i> {employee.contact}
                      </p>
                    )}
                  </div>
                  <div className="social-links">
                    {employee.linkedin && (
                      <a
                        href={employee.linkedin}
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    )}
                    {employee.twitter && (
                      <a
                        href={employee.twitter}
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    )}
                    {employee.github && (
                      <a
                        href={employee.github}
                        className="social-icon"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    )}
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

export default EmployeeList;
