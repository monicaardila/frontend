import React from "react";
import Navbar from "../../UI/Navbar/Navbar";
import Logo from "../../UI/Logo/Logo";
import "./header.css";

function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Logo></Logo>
          <div>
            <Navbar></Navbar>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
