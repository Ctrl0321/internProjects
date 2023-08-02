import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import EmplyeeTab from "./components/EmployeeTab";
import AddEmployee from "./components/AddEmployee";
import FindEmployee from "./components/FindEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/table" element={<EmplyeeTab />} />
        <Route path="/addEmployee" element={<AddEmployee />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/findTable" Component={FindEmployee}/>
      </Routes>
    </div>
  );
}

export default App;
