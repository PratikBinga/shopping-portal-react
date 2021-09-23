import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="navbarPosition">
        <div className="wrapperNameandMenu">
          <h2>
            <NavBar />
          </h2>

          <span>
            <h2>
              <Link to={`/`}>Shopping Portal</Link>
            </h2>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
