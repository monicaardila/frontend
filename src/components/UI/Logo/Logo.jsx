import React from "react";
import logo from "../../../Images/icono.png";
import { NavLink } from "react-router-dom";
import "./logo.css"

function Logo() {
  return (
    <div className="container_logo">
      <NavLink className="navbar-brand" to="/">
        <img class="img" src={logo} alt="logo"  />
        Digiturnos
      </NavLink>
    </div>
  );
}

export default Logo;
