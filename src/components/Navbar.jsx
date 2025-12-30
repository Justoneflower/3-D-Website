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
        
        {/* ===== Left: Hamburger + Logo ===== */}
        <div className="nav-left">
          {/* Hamburger (mobile only via CSS) */}
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Logo */}
          <div className="logo-holder"></div>
          <div className="logo-text">ETMN</div>
        </div>

        {/* ===== Center: Navigation (desktop) ===== */}
        <nav className="nav-center">
          <ul className="nav-links">
            {links.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>

        {/* ===== Right: Search + CTA ===== */}
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
