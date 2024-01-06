import React, { useCallback } from "react";
import Header from "../../components/header";
import TasksList from "../../components/tasks-list";
import { shallowEqual, useDispatch, useSelector, useStore } from "react-redux";
import tasksActions from "../../store/tasks/actions";
import TaskItem from "../../components/task-item";
import { useNavigate } from "react-router";
let TaskCard = (props) => {
  const dispatch = useDispatch();
  const store = useStore();
  const navigate = useNavigate();
  const select = useSelector(
    (state) => ({
      task: state.task.task,
      waiting: state.task.waiting,
      profile: state.login.profile,
      isAuth: state.login.isAuth,
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
    navigate: () => navigate("/"),
    done: useCallback((id) => dispatch(tasksActions.doneTask(id)), [store]),
  };

  return (
    <div className="task-card">
      <Header profile={select.profile} isAuth={select.isAuth} />
      <TaskItem
        navigate={callbacks.navigate}
        delete={callbacks.delete}
        task={select.task}
        done={callbacks.done}
      />
    </div>
  );
};

export default TaskCard;
