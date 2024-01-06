import React, { useCallback } from "react";
import Header from "../../components/header";
import TasksList from "../../components/tasks-list";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import tasksActions from "../../store/tasks/actions";
import TaskForm from "../../components/task-form";
import { useNavigate } from "react-router";
let AddTaskForm = (props) => {
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();

  const select = useSelector(
    (state) => ({
      tasks: state.tasks.tasks,
      profile: state.login.profile,
      isAuth: state.login.isAuth,
    }),
    shallowEqual
  );

  const callbacks = {
    addTask: useCallback(
      (task) => {
        dispatch(tasksActions.addTask(task));
      },
      [store]
    ),
    navigate: () => navigate("/"),
  };

  return (
    <div className="main-side">
      <Header profile={select.profile} isAuth={select.isAuth} />
      <TaskForm navigate={callbacks.navigate} addTask={callbacks.addTask} />
    </div>
  );
};

export default AddTaskForm;
