import React, { useState } from "react";
import "./style.css";
let LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [reg, setReg] = useState(false);

  let onSubmit = (e) => {
    e.preventDefault();
    if (reg) {
      props.registration(name, password, login);
    }
    setLogin("");
    setPassword("");
  };
  let onClick = (e) => {
    e.preventDefault();
    setReg(!reg);
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className="LoginForm">
      <h1 className="title">{reg ? "Зарегистрироваться" : "Войти"}</h1>
      <div className="input-block">
        <input
          className="input"
          onChange={(e) => setLogin(e.target.value)}
          value={login}
          placeholder="Логин"
        />
      </div>
      <div className="input-block">
        <input
          type="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Пароль"
        />
      </div>
      {reg ? (
        <div className="input-block">
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Имя"
          />
        </div>
      ) : (
        ""
      )}
      <div className="button-block">
        <button type="submit" className="LoginForm-btn">
          {reg ? "Зарегистрироваться" : "Войти"}
        </button>
      </div>
      <div>
        <a onClick={(e) => onClick(e)} href="">
          {reg ? "Войти" : "Зарегистрироваться"}
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
