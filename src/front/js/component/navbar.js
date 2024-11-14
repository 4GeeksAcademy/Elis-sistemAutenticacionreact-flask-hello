import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Check the Context in action</button>
          </Link>
        </div> {/* Cerré este div que estaba abierto */}
        <div className="buttons-container d-flex">
          <div className="me-5 ml-auto">
            <Link to="/login">
              <button className="btn btn-secondary">Iniciar sesión</button>
            </Link>
          </div>
          <div className="ml-auto">
            <Link to="/register">
              <button className="btn btn-secondary">Registrarse</button>
            </Link>
          </div>
        </div>
      </div> {/* Cerré este div que estaba abierto */}
    </nav>
  );
};
