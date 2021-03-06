import React from "react";

const TopNavbar = () => {
  return (
    <nav id="navbar" className="navbar" style={{marginBottom: '50px', paddingLeft: '20px'}}>
      <ul>
        <li>
          <a className="nav-link inactive" href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/about">
            About{" "}
          </a>
        </li>
        <li>
          <a className="nav-link" href="/resume">
            Resume
          </a>
        </li>
        <li>
          <a className="nav-link" href="/skills">
            Skills
          </a>
        </li>
        <li>
          <a className="nav-link" href="/portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="nav-link" href="/contact">
            Contact
          </a>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};

export default TopNavbar;
