import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <Link className="navbar-brand" to="/">
        Total Bike
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reportes">
              Reportes
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ventas">
              Ventas
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
