import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <p> Inicio</p>
          </NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Informacion">
            Informacion
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Servicios">
            Servicios
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Para_Desarrolladores">
            Desarrolladores
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="./Contacto">
            Acerca de nosotros
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
