import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div>
      <NavLink className="navbar-brand" to="/">
        <img class="img-fluid rounded mb-4 mb-lg-0" src={logo} alt="logo" />
        Digiturnos
      </NavLink>
    </div>
  );
}

export default Logo;
