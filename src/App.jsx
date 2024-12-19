import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Indonesia from "./pages/Indonesia";
import Programming from "./pages/Programming";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">TheBulletin</Link>
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
      <Routes>
        <Route path="/" element={<Indonesia />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </div>
  );
};

export default App;