import React from "react";
import "./Navbar.css";


const Navbar = () => {
  const links = [
    "Home",
    "3D Printers",
    "Materials",
    "Software",
    "Learn",
    "Contact",
  ];

  return (
    <header className="navbar">
      <div className="nav-grid">
        {/* Left: Logo Area */}
        <div className="nav-left">
          {/* Space reserved for future logo */}
          <div className="logo-holder"></div>
          <div className="logo-text">ETMN</div>
        </div>

        {/* Center: Navigation */}
        <nav className="nav-center">
          <ul className="nav-links">
            {links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>

        {/* Right */}
        <div className="nav-right">
          <input
            type="text"
            placeholder="Search"
            className="nav-search"
          />
          <button className="quote-btn">Request A Quote</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


