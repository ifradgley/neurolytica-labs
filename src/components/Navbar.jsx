import { useState } from "react";
import { searchIndex } from "../data/searchIndex";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/Neurolytica-Title-Logo(V2).png";
import searchIcon from "../assets/images/search-teal.png";

function Navbar() {
  const [query, setQuery] = useState("");
  console.log(searchIndex);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logo} alt="Neurolytica Lab Logo" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
        <li>
          <NavLink to="/publications">Publications</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="search-container">
          <input
            id="search-bar"
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <img src={searchIcon} alt="search" className="search-icon" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
