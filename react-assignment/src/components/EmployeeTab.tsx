import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/EmployeeTab.css";

function EmplyeeTab() {
  interface employeeModel {
    firstName: string;
    surName: string;
    position: string;
    departmentId: number;
    _class: string;
  }
  const [employee, setEmployee] = useState<[employeeModel]>([
    {
      firstName: "",
      surName: "",
      position: "",
      departmentId: 0,
      _class: "",
    },
  ]);
  useEffect(() => {
    console.log(employee);
  }, [employee]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8080/api/employees");
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>SurName</th>
            <th>Possition</th>
            <th>DepartmentId</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => (
            <tr key={employee.firstName}>
              <td>{employee.firstName}</td>
              <td>{employee.surName}</td>
              <td>{employee.position}</td>
              <td>{employee.departmentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmplyeeTab;
