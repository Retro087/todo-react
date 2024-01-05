import React, { useState } from "react";
import "./style.css";
let TaskItem = (props) => {
  if (!props.task?.id) {
    return <div className="not-found">Задача не найдена</div>;
  }

  let onDelete = () => {
    props.delete(props.task.id);
    props.navigate();
  };

  return (
    <div>
      <div className="TaskItem">
        <h1 className="title">{props.task.title}</h1>

        <div className="block">
          <p className="description">{props.task.description}</p>
        </div>

        <div className="buttons-block">
          <button className="TaskItem-btn-done">Задача выполнена</button>
          <button onClick={() => onDelete()} className="TaskItem-btn">
            Удалить задачу
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
