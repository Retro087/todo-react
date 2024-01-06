import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
let Header = (props) => {
  return (
    <div className="Header">
      {props.isAuth ? (
        <div className="Header-user">
          <Link to="/profile">
            <span className="Header-name">{props.profile.name}</span>
          </Link>

          {props.profile.photo ? (
            <img
              className="photo"
              src={URL.createObjectURL(props.profile.photo)}
            />
          ) : (
            <div className="Header-icon"></div>
          )}
        </div>
      ) : (
        <Link to="/login">Войти</Link>
      )}
    </div>
  );
};

export default Header;
