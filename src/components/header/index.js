import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
let Header = (props) => {
  return (
    <div className="Header">
      {props.isAuth ? (
        <div className="Header-user">
          <span className="Header-name">{props.profile.name}</span>
          <div className="Header-icon">{props.profile.icon}</div>
        </div>
      ) : (
        <Link to="/login">Войти</Link>
      )}
    </div>
  );
};

export default Header;
