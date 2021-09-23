import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { sideBarData } from "./SideBar";
import "./NavBar.css";
import { IconContext } from "react-icons";

const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <IconContext.Provider
        value={{ color: "#060b26" }}
        className={"navBarContainerCOlor"}
      >
        <div className={"navBarContainerCOlor"}>
          <div className={"navbar"}>
            <Link to="#">
              <FaIcons.FaBars onClick={showSideBar} />
            </Link>
          </div>
          <nav className={sideBar ? "nav-menu-active" : "nav-menu"}>
            <ul className={"nav-menu-items"} onClick={showSideBar}>
              <li className="navbar-toggle">
                <Link className="menu-bars" to="#">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {sideBarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
