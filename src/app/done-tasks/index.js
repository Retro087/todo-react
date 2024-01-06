import React, { useLayoutEffect } from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useNavigate, useParams } from "react-router";
import AddTaskForm from "../../containers/add-task-form";
import DoneTasksCard from "../../containers/done-tasks-card";
import { shallowEqual, useSelector } from "react-redux";

let DoneTasks = () => {
  const isAuth = useSelector((state) => state.login.isAuth, shallowEqual);
  const navigate = useNavigate();

  return (
    <div className="add-task">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <DoneTasksCard />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default DoneTasks;
