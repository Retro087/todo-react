import React from "react";
import "./style.css";
let Header = (props) => {
  return (
    <div className="Header">
      <div className="Header-user">
        <span className="Header-name">User</span>
        <div className="Header-icon"></div>
      </div>
    </div>
  );
};

export default Header;
