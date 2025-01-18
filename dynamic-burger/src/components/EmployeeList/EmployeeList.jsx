import React, { useState, useEffect } from 'react';
import './EmployeeList.css';

const EmployeeList = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwwH1nSvRMOx5d5U6gDihBbS0HB8FS98e8ENJxT07vOsj3d4BH4swNz2QGcUNAqpPsK/exec');
        const data = await response.json();
        setEmployeesData(data.employees); // Accessing employee data from the response
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-list">
      <h2>Our Employees</h2>
      {loading ? (
        <p>Loading employees...</p>
      ) : (
        <div className="employee-cards">
          {employeesData.length > 0 ? (
            employeesData.map((employee, index) => (
              <div className="employee-card" key={index}>
                <img src={employee.image_url} alt={employee.name} className="employee-img" />
                <div className="employee-info">
                  <h3>{employee.name}</h3>
                  <p className="role">{employee.role}</p>
                  <p className="description">{employee.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No employees available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
