import React, { useState } from "react";
import "./Navbar.css";


function Navbar() {
  const [isOpen, setIsOpen] =  useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/" className="logo-link">GA</a>
      </div>
      <ul className={isOpen ? "nav-menu open" : "nav-menu"}>
        <li>
          <a href="#projects" className="nav-item">Projects</a>
        </li>
        <li>
          <a href="/services" className="nav-item">About</a>
        </li>
        <li>
          <a href="#" className="nav-item">Contact</a>
        </li>
        <div className="close-menu" onClick={() => setIsOpen(false)}>
          ✖
        </div>
      </ul>
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;