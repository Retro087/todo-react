import React, { useCallback, useState } from "react";
import "./style.css";
import Header from "../../components/header";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ProfileForm from "../../components/profile-form";
import loginActions from "../../store/login/actions";

let ProfileCard = (props) => {
  const dispatch = useDispatch();
  const select = useSelector(
    (state) => ({
      isAuth: state.login.isAuth,
      profile: state.login.profile,
    }),
    shallowEqual
  );
  const callbacks = {
    update: useCallback((name, login, password, photo) =>
      dispatch(loginActions.update(name, login, password, photo))
    ),
  };
  return (
    <div>
      <Header profile={select.profile} isAuth={select.isAuth} />
      <ProfileForm update={callbacks.update} profile={select.profile} />
    </div>
  );
};

export default ProfileCard;
