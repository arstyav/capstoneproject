import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">TVNews</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Indonesia</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/programming">Programming</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
