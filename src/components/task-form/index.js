import React, { useState } from "react";
import "./style.css";
let TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  let onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      return;
    }
    props.addTask({ title, description });
    setTitle("");
    setDescription("");
    props.navigate();
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="TaskForm">
      <h1 className="title">Добавление задачи</h1>
      <div className="input-block">
        <input
          className="input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Название"
        />
      </div>
      <div className="input-block">
        <textarea
          className="area"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Описание"
        />
      </div>
      <div className="button-block">
        <button type="submit" className="TaskForm-btn">
          Добавить задачу
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
