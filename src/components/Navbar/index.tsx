import React from "react";
import "./styles.scss";

import cupcakeLogo from "../../assets/cupcake.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar-container">
      <div className="cupcakeLogo-container">
        <img src={cupcakeLogo} alt="cupcake-logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
