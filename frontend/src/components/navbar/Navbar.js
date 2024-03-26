import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = ({ onAddUser, onAddGroup, onViewUsers, onViewGroups }) => {

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon">
            <Link to="/">Django Apps</Link>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-inline-nav">
            <ul className="navbar-nav">
	     <li className="nav-item">
	      <Link to="/users" className="nav-link" onClick={onViewUsers}>Users</Link>
	     </li>
            </ul>
            <li className="nav-item">
	      <Link to="/groups" className="nav-link" onClick={onViewGroups}>Groups</Link>
	    </li>
          </div>
          <div className="navbar-inline-nav-add">
            <ul className="navbar-nav-button-add">
              <button className="btn" type="button" onClick={onAddUser}>
                Add user
              </button>
            </ul>
            <ul className="navbar-nav-button-add">
              <button
                className="btn"
                type="button"
                onClick={onAddGroup}>
                Add group
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
