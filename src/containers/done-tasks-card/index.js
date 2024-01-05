import React, { useCallback } from "react";
import Header from "../../components/header";
import TasksList from "../../components/tasks-list";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import tasksActions from "../../store/tasks/actions";
import DoneList from "../../components/done-list";
let DoneTasksCard = (props) => {
  const dispatch = useDispatch();
  const store = useStore();

  const select = useSelector(
    (state) => ({
      doneTasks: state.tasks.done,
    }),
    shallowEqual
  );

  const callbacks = {
    delete: useCallback(
      (id) => {
        dispatch(tasksActions.deleteDone(id));
      },
      [store]
    ),
    addTask: useCallback(
      (task) => {
        dispatch(tasksActions.addTask(task));
      },
      [store]
    ),
  };

  return (
    <div className="main-side">
      <Header />
      <DoneList delete={callbacks.delete} done={select.doneTasks} />
    </div>
  );
};

export default DoneTasksCard;
