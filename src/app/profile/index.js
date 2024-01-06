import React, { useEffect, useLayoutEffect } from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useNavigate, useParams } from "react-router";
import TaskCard from "../../containers/task-card";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TaskActions from "../../store/task/actions";
import ProfileCard from "../../containers/profile-card";

let Profile = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks, shallowEqual);
  const isAuth = useSelector((state) => state.login.isAuth, shallowEqual);
  const navigate = useNavigate();

  return (
    <div className="Task">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <ProfileCard />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default Profile;
