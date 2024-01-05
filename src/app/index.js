import React from "react";
import Main from "./main";
import { Route, Routes } from "react-router-dom";
import AddTask from "./add-task";
import Task from "./task";
import DoneTasks from "./done-tasks";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/add-task"} element={<AddTask />} />
        <Route path={"/task/:id"} element={<Task />} />
        <Route path={"/done"} element={<DoneTasks />} />
      </Routes>
    </>
  );
}

export default App;
