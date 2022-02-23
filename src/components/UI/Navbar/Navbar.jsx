import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="todo">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <p> Inicio</p>
            <span className="sr-only">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Informacion">
            Informacion
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Servicios">
            Servicios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Para_Desarrolladores">
            Para Desarrolladores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Contacto">
            Contactos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
