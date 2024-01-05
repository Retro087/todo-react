import React from "react";
import TaskItemShort from "../task-item-short";
import "./style.css";
let DoneList = (props) => {
  return (
    <div className="DoneList">
      <h1 className="title">Выполненные задачи</h1>
      {props.done.length ? (
        props.done.map((item, i) => {
          return (
            <TaskItemShort
              key={i}
              isDone={true}
              delete={props.delete}
              item={item}
            />
          );
        })
      ) : (
        <h1 className="not-found">Нет задач</h1>
      )}
    </div>
  );
};

export default DoneList;
