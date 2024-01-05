import React from "react";
import LeftSide from "../../components/left-side";
import SideLayout from "../../components/side-layout";
import MainSide from "../../containers/main-side";
import PageLayout from "../../components/page-layout";
import { useParams } from "react-router";
import AddTaskForm from "../../containers/add-task-form";

let AddTask = () => {
  return (
    <div className="add-task">
      <PageLayout>
        <SideLayout>
          <LeftSide />
          <AddTaskForm />
        </SideLayout>
      </PageLayout>
    </div>
  );
};

export default AddTask;
