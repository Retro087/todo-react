import React, { useState } from "react";
import "./style.css";

let ProfileForm = (props) => {
  const [photo, setPhoto] = useState(props.profile.photo);
  const [login, setLogin] = useState(props.profile.login);
  const [password, setPassword] = useState(props.profile.password);
  const [name, setName] = useState(props.profile.name);
  const [changes, setChanges] = useState(false);

  let onSave = () => {
    props.update(name, login, password, photo);
    setChanges(false);
  };

  return (
    <div className="ProfileForm">
      <div className="ProfileForm-user">
        <div className="Profile-photo">
          {photo ? (
            <div>
              <img
                className="ProfileForm-icon"
                src={URL.createObjectURL(photo)}
              />
              <div>
                <label className="label" for="upload">
                  Заменить фото
                </label>
                <input
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="file"
                  id="upload"
                  type="file"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="label" for="upload">
                Добавить фото
              </label>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                className="file"
                id="upload"
                type="file"
              />
            </div>
          )}
        </div>
        <div className="Profile-descript">
          <div className="Profile-item">
            {changes ? (
              <div>
                Имя:
                <input
                  autoFocus={true}
                  value={`${name}`}
                  className="ProfileForm-name input-profile"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            ) : (
              <p>Имя: {name}</p>
            )}
          </div>
          <div className="Profile-item">
            {changes ? (
              <div>
                Логин:
                <input
                  value={login}
                  className="ProfileForm-login input-profile"
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
            ) : (
              <p>Логин: {login}</p>
            )}
          </div>
          <div className="Profile-item">
            {changes ? (
              <div>
                Пароль:
                <input
                  value={password}
                  className="ProfileForm-password input-profile"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            ) : (
              <p>{`Пароль: ${password}`}</p>
            )}
          </div>
          <div>
            {changes ? (
              <button className="btn" onClick={() => onSave()}>
                Сохранить изменения
              </button>
            ) : (
              <button className="btn" onClick={() => setChanges(true)}>
                Редактировать
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
