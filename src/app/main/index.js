import React, { useLayoutEffect } from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useNavigate, useParams } from "react-router";
import { shallowEqual, useSelector } from "react-redux";

let Main = () => {
  const isAuth = useSelector((state) => state.login.isAuth, shallowEqual);
  const navigate = useNavigate();

  return (
    <div className="main">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <MainSide />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default Main;
