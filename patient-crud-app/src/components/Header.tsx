import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Patient Info Crud App</h1>
      <div className="nav">
        <NavLink to="/" className="navlink" activeClassName="active" exact>
          Patients List
        </NavLink>
        <NavLink to="/add" className="navlink" activeClassName="active">
          Add New Patient
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
