import React from "react";
import logo from './logo.png';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={logo} alt="logo"/>
                        Digiturnos
                    </NavLink>
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                Inicio
                                <span className="sr-only">(current)</span>
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
            </div>
        </nav>
    </div>
);
}

export default Navbar;