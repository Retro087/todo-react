import { useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";

function Protected({ children, redirect }) {
  const select = useSelector(
    (state) => ({
      isAuth: state.login.isAuth,
    }),
    shallowEqual
  );

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!select.isAuth) {
      navigate(redirect, { state: { back: location.pathname } });
    }
  }, [select.isAuth]);

  if (!select.isAuth) {
    return <div>Ждём...</div>;
  } else {
    return children;
  }
}

export default Protected;
