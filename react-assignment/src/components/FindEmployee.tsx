
import * as React from 'react';
import { useState,useEffect } from 'react';
import "../css/FindEmployee.css";
import axios from 'axios';


export default function FindEmployee() {
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
      const [name,setname]=useState<string>("")

      const getEmployee=()=>{
        
              axios.get(`http://localhost:8080/api/employees/${name}`)
              .then(response=>{
                console.log(response.data);
                setEmployee([response.data])  
              })
              .catch(error=>{
                console.log(error.response.data);
                alert(error.response.data)
                
              })

            
          
      }
      const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
            const {name,value}=e.target
            setname(value)
      }
  return (
    <>
    <div className='searchBar'>
        <input className='input' type='text' name='name' value={name} onChange={handleChange}></input>
        <button className='search-btn' onClick={getEmployee}>Search <span></span></button>

    </div>
     
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
    </>
  )
}
