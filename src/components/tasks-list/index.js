import React from "react";
import "./style.css";
import TaskItem from "../task-item-short";
import TaskItemShort from "../task-item-short";

let TasksList = (props) => {
  return (
    <div className="TasksList">
      <h1 className="title">Задачи</h1>
      {props.tasks.length ? (
        props.tasks.map((item, i) => {
          return <TaskItemShort key={i} delete={props.delete} item={item} />;
        })
      ) : (
        <h1 className="not-found">Нет задач</h1>
      )}
    </div>
  );
};

export default TasksList;
