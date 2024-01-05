import React, { useEffect } from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useParams } from "react-router";
import TaskCard from "../../containers/task-card";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TaskActions from "../../store/task/actions";

let Task = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks, shallowEqual);

  useEffect(() => {
    dispatch(TaskActions.getTask(params.id, tasks));
  }, [params.id, tasks]);

  return (
    <div className="Task">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <TaskCard />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default Task;
