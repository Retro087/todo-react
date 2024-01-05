import React, { useCallback } from "react";
import Header from "../../components/header";
import TasksList from "../../components/tasks-list";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import tasksActions from "../../store/tasks/actions";
let MainSide = (props) => {
  const dispatch = useDispatch();
  const store = useStore();

  const select = useSelector(
    (state) => ({
      tasks: state.tasks.tasks,
    }),
    shallowEqual
  );

  const callbacks = {
    delete: useCallback(
      (id) => {
        dispatch(tasksActions.delete(id));
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
      <TasksList
        addTask={callbacks.addTask}
        delete={callbacks.delete}
        tasks={select.tasks}
      />
    </div>
  );
};

export default MainSide;
