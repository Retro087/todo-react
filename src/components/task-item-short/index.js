import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
let TaskItemShort = (props) => {
  let onClick = () => {
    let id = props.item.id;
    props.delete(id);
  };
  return (
    <div className="TaskItemShort">
      <Link className="TaskItemShort-title" to={`/task/${props.item.id}`}>
        <p>{props.item.title}</p>
      </Link>
      <div className="buttons">
        <button className="btn done">done</button>
        <button onClick={() => onClick()} className="btn delete">
          delete
        </button>
      </div>
    </div>
  );
};

export default TaskItemShort;
