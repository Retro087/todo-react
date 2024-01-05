import React from "react";
import "./style.css";
import { Link, NavLink } from "react-router-dom";

let LeftSideItems = (props) => {
  return (
    <div className="left-side">
      <NavLink
        className={(navData) =>
          navData.isActive ? "active" : "left-side-item"
        }
        to={"/"}
      >
        Задачи
      </NavLink>

      <NavLink
        className={(navData) =>
          navData.isActive ? "active" : "left-side-item"
        }
        to={"/add-task"}
      >
        Добавить задачу
      </NavLink>
    </div>
  );
};

export default LeftSideItems;