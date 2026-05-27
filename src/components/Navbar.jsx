import { NavLink } from "react-router-dom";
import logo from "../assets/images/Neurolytica-Title-Logo(V2).png";

function Navbar() {
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
      </ul>
    </nav>
  );
}

export default Navbar;
