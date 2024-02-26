import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";

import menu from "../../assets/menu_open.svg";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = () => {
  return (
    <div className="main">
      <input type="checkbox" id="check" />
      <div className="menu_open">
        <label htmlFor="check">
          <img src={menu} alt="Menu Icon" />
        </label>
      </div>

      <div className="left-sidebar">
        <nav className="side-nav">
          <NavLink to="/" className="side-nav-links" activeclassname="active">
            <p>Home</p>
          </NavLink>

          <div className="side-nav-div">
            <div>
              <p>PUBLIC</p>
            </div>

            <NavLink
              to="/Questions"
              className="side-nav-links"
              style={{ paddingLeft: "15px" }}
            >
              <img src={Globe} alt="Globe" width="24" />
              <p style={{ paddingLeft: "6px" }}>Questions </p>
            </NavLink>

            <NavLink
              to="/Tags"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "46px" }}
            >
              <p>Tags</p>
            </NavLink>

            <NavLink
              to="/Users"
              className="side-nav-links"
              activeclassname="active"
              style={{ paddingLeft: "46px" }}
            >
              <p>Users</p>
            </NavLink>
            <NavLink
              to="/About"
              className="side-nav-links"
              activeclassname="active"
            >
              <p>About</p>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default LeftSidebar;
