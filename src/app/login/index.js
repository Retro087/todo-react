import React, { useCallback, useEffect } from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useNavigate, useParams } from "react-router";
import LoginForm from "../../components/login-form";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import loginActions from "../../store/login/actions";

let Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const select = useSelector(
    (state) => ({
      isAuth: state.login.isAuth,
    }),
    shallowEqual
  );
  const callbacks = {
    registration: useCallback((name, password, login) => {
      dispatch(loginActions.registration(name, password, login));
      navigate("/");
    }),
  };
  useEffect(() => {
    if (select.isAuth) {
      navigate("/");
    }
  }, [select.isAuth]);

  return (
    <div className="Login">
      <PageLayout>
        <LoginForm registration={callbacks.registration} />
      </PageLayout>
    </div>
  );
};

export default Login;
